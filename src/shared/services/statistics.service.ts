import { takCostSplitApi } from "../api/task-cost-split";
import { IStatisticsResponse } from "../interfaces/user-interface";

export const getMyStatistics = async (): Promise<IStatisticsResponse> => {
  const { data } = await takCostSplitApi.get<IStatisticsResponse>(
    "/users/me/statistics",
  );
  return data;
};
