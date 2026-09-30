import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import * as participantService from "@/shared/services/participants.service";
import { IUser } from "@/shared/interfaces/user-interface";
import { IAddParticipantsRequest } from "@/shared/interfaces/http/participants-http-interface";
import * as activityService from "@/shared/services/activities.service";
import { IParticipantSummary } from "@/shared/interfaces/participant-interface";
import { useAuthContext } from "./auth.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

interface Loadings {
  initial: boolean;
  action: boolean;
  refresh: boolean;
}

interface HandleLoadingParams {
  key: keyof Loadings;
  value: boolean;
}

type ParticipantContextType = {
  users: IUser[];
  fetchUsers: () => Promise<void>;
  addParticipants: (
    activityId: string,
    params: IAddParticipantsRequest,
  ) => Promise<void>;
  removeParticipant: (activityId: string, userId: string) => Promise<void>;
  loadings: Loadings;
  handleLoadings: (params: HandleLoadingParams) => void;
  globalParticipants: IParticipantSummary[];
  loadingParticipants: boolean;
  fetchParticipantsFromActivities: (userId: string) => Promise<void>;
};

export const ParticipantContext = createContext<
  ParticipantContextType | undefined
>(undefined);

export const ParticipantContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { user } = useAuthContext();
  const { handleError } = useErrorHandler();
  const [users, setUsers] = useState<IUser[]>([]);
  const [globalParticipants, setGlobalParticipants] = useState<
    IParticipantSummary[]
  >([]);
  const [loadingParticipants, setLoadingParticipants] = useState(true);
  const [loadings, setLoadings] = useState<Loadings>({
    initial: false,
    action: false,
    refresh: false,
  });

  const handleLoadings = useCallback(({ key, value }: HandleLoadingParams) => {
    setLoadings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const fetchUsers = useCallback(async () => {
    try {
      handleLoadings({ key: "initial", value: true });
      const response = await participantService.getUsers();
      setUsers(response.users);
    } catch (error) {
      handleError(error, "Falha ao buscar usuários");
    } finally {
      handleLoadings({ key: "initial", value: false });
    }
  }, [handleLoadings]);

  const addParticipants = async (
    activityId: string,
    params: IAddParticipantsRequest,
  ) => {
    try {
      handleLoadings({ key: "action", value: true });
      await participantService.addParticipantsToActivity(activityId, params);
    } catch (error) {
      handleError(error, "Falha ao adicionar participantes");
      throw error;
    } finally {
      handleLoadings({ key: "action", value: false });
    }
  };

  const removeParticipant = async (activityId: string, userId: string) => {
    try {
      handleLoadings({ key: "action", value: true });
      await participantService.removeParticipantFromActivity(
        activityId,
        userId,
      );
    } catch (error) {
      handleError(error, "Falha ao remover participante");
      throw error;
    } finally {
      handleLoadings({ key: "action", value: false });
    }
  };

  const fetchParticipantsFromActivities = async (userId: string) => {
    try {
      setLoadingParticipants(true);
      const data = await activityService.getActivities(userId);

      const participantsMap = new Map<string, IParticipantSummary>();

      data.activities?.forEach((activity) => {
        activity.participants?.forEach((participant) => {
          if (participant.id === userId) return;

          if (participantsMap.has(participant.id)) {
            const existing = participantsMap.get(participant.id)!;
            participantsMap.set(participant.id, {
              ...existing,
              activitiesCount: existing.activitiesCount + 1,
            });
          } else {
            participantsMap.set(participant.id, {
              id: participant.id,
              name: participant.name,
              activitiesCount: 1,
            });
          }
        });
      });

      setGlobalParticipants(Array.from(participantsMap.values()));
    } catch (error) {
      handleError(error, "Falha ao buscar participantes das atividades");
    } finally {
      setLoadingParticipants(false);
    }
  };

  return (
    <ParticipantContext.Provider
      value={{
        users,
        fetchUsers,
        addParticipants,
        removeParticipant,
        loadings,
        handleLoadings,
        globalParticipants,
        loadingParticipants,
        fetchParticipantsFromActivities,
      }}
    >
      {children}
    </ParticipantContext.Provider>
  );
};

export const useParticipantContext = () => {
  const context = useContext(ParticipantContext);
  if (!context) {
    throw new Error(
      "useParticipantContext deve ser usado dentro de um ParticipantContextProvider",
    );
  }
  return context;
};
