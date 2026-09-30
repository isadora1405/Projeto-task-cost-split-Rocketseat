import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import * as activityService from "@/shared/services/activities.service";
import {
  Activity,
  ICreateActivityRequest,
  IGetActivityDetailsResponse,
} from "@/shared/interfaces/http/activity-interface";
import { useAuthContext } from "./auth.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

interface Loadings {
  initial: boolean;
  refresh: boolean;
  details: boolean;
}

interface HandleLoadingParams {
  key: keyof Loadings;
  value: boolean;
}

type ActivityContextType = {
  activities: Activity[];
  currentActivityDetails: IGetActivityDetailsResponse | null;
  handleCreateActivity: (params: ICreateActivityRequest) => Promise<void>;
  fetchActivities: () => Promise<void>;
  fetchActivityDetails: (activityId: string) => Promise<void>;
  loadings: Loadings;
  handleLoadings: (params: HandleLoadingParams) => void;
  refreshActivities: () => Promise<void>;
};

export const ActivityContext = createContext<ActivityContextType>(
  {} as ActivityContextType,
);

export const ActivityContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { user } = useAuthContext();
  const { handleError } = useErrorHandler();

  const [activities, setActivities] = useState<Activity[]>([]);
  const [currentActivityDetails, setCurrentActivityDetails] =
    useState<IGetActivityDetailsResponse | null>(null);

  const [loadings, setLoadings] = useState<Loadings>({
    initial: false,
    refresh: false,
    details: false,
  });

  const handleLoadings = ({ key, value }: HandleLoadingParams) => {
    setLoadings((prev) => ({ ...prev, [key]: value }));
  };

  const refreshActivities = useCallback(async () => {
    if (!user?.id) return;
    try {
      handleLoadings({ key: "refresh", value: true });
      const response = await activityService.getActivities(user.id);
      setActivities(response.activities);
    } catch (error) {
      handleError(error, "Falha ao recarregar as atividades");
    } finally {
      handleLoadings({ key: "refresh", value: false });
    }
  }, [user?.id]);

  const fetchActivities = useCallback(async () => {
    if (!user?.id) return;
    try {
      const response = await activityService.getActivities(user.id);
      setActivities(response.activities);
    } catch (error) {
      handleError(error, "Falha ao buscar as atividades");
    }
  }, [user?.id]);

  const fetchActivityDetails = useCallback(async (activityId: string) => {
    try {
      handleLoadings({ key: "details", value: true });
      const response = await activityService.getActivityDetails(activityId);
      setCurrentActivityDetails(response);
    } catch (error) {
      handleError(error, "Falha ao buscar detalhes da atividade");
      throw error;
    } finally {
      handleLoadings({ key: "details", value: false });
    }
  }, []);

  const handleCreateActivity = async (params: ICreateActivityRequest) => {
    try {
      const response = await activityService.createActivity(params);

      const newActivity: Activity = {
        id: response.id,
        name: response.name,
        activityDate: response.activityDate,
        totalAmountInCents: 0,
        expensesAmount: 0,
        participantsAmount: 1,
        participants: [],
      };

      setActivities((prev) => [...prev, newActivity]);
    } catch (error) {
      handleError(error, "Falha ao criar atividade");
      throw error;
    }
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        currentActivityDetails,
        handleCreateActivity,
        fetchActivities,
        fetchActivityDetails,
        loadings,
        handleLoadings,
        refreshActivities,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivityContext = () => {
  const context = useContext(ActivityContext);
  return context;
};
