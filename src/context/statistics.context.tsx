import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import * as statisticsService from "@/shared/services/statistics.service";
import { IStatisticsResponse } from "@/shared/interfaces/user-interface";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

interface StatisticsContextData {
  statistics: IStatisticsResponse | null;
  loadingStatistics: boolean;
  fetchStatistics: () => Promise<void>;
}

const StatisticsContext = createContext<StatisticsContextData>(
  {} as StatisticsContextData,
);

export const StatisticsProvider = ({ children }: { children: ReactNode }) => {
  const [statistics, setStatistics] = useState<IStatisticsResponse | null>(
    null,
  );
  const [loadingStatistics, setLoadingStatistics] = useState(true);
  const { handleError } = useErrorHandler();

  const fetchStatistics = useCallback(async () => {
    try {
      setLoadingStatistics(true);
      const data = await statisticsService.getMyStatistics();
      setStatistics(data);
    } catch (error) {
      handleError(error, "Falha ao buscar estatísticas do usuário");
    } finally {
      setLoadingStatistics(false);
    }
  }, []);

  return (
    <StatisticsContext.Provider
      value={{ statistics, loadingStatistics, fetchStatistics }}
    >
      {children}
    </StatisticsContext.Provider>
  );
};

export const useStatisticsContext = () => {
  return useContext(StatisticsContext);
};
