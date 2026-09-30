import { takCostSplitApi } from "../api/task-cost-split";
import {
  ICreateActivityRequest,
  ICreateActivityResponse,
  IGetActivitiesResponse,
  IGetActivityDetailsResponse,
  IUpdateActivityRequest,
  IUpdateActivityResponse,
} from "../interfaces/http/activity-interface";

export const createActivity = async (
  activityData: ICreateActivityRequest,
): Promise<ICreateActivityResponse> => {
  const { data } = await takCostSplitApi.post<ICreateActivityResponse>(
    "/activities",
    activityData,
  );
  return data;
};

export const getActivities = async (
  userId: string,
): Promise<IGetActivitiesResponse> => {
  const { data } = await takCostSplitApi.get<IGetActivitiesResponse>(
    `/users/${userId}/activities`,
  );
  return data;
};

export const getActivityDetails = async (
  activityId: string,
): Promise<IGetActivityDetailsResponse> => {
  const { data } = await takCostSplitApi.get<IGetActivityDetailsResponse>(
    `/activities/${activityId}`,
  );
  return data;
};

export const updateActivity = async (
  activityId: string,
  params: IUpdateActivityRequest,
): Promise<IUpdateActivityResponse> => {
  const { data } = await takCostSplitApi.put<IUpdateActivityResponse>(
    `/activities/${activityId}`,
    params,
  );
  return data;
};

export const deleteActivity = async (activityId: string): Promise<void> => {
  await takCostSplitApi.delete(`/activities/${activityId}`);
};
