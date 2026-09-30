import { takCostSplitApi } from "../api/task-cost-split";
import {
  IAddParticipantsRequest,
  IAddParticipantsResponse,
  IGetUsersResponse,
  IRemoveParticipantResponse,
} from "../interfaces/http/participants-http-interface";

export const getUsers = async (): Promise<IGetUsersResponse> => {
  const { data } = await takCostSplitApi.get<IGetUsersResponse>("/users");
  return data;
};

export const addParticipantsToActivity = async (
  activityId: string,
  params: IAddParticipantsRequest,
): Promise<IAddParticipantsResponse> => {
  const { data } = await takCostSplitApi.post<IAddParticipantsResponse>(
    `/activities/${activityId}/participants`,
    params,
  );
  return data;
};

export const removeParticipantFromActivity = async (
  activityId: string,
  userId: string,
): Promise<IRemoveParticipantResponse> => {
  const { data } = await takCostSplitApi.delete<IRemoveParticipantResponse>(
    `/activities/${activityId}/participants/${userId}`,
  );
  return data;
};
