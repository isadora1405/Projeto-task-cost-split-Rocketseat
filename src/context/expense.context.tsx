import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import * as expenseService from "@/shared/services/expense.service";
import {
  Expense,
  ICreateExpenseRequest,
  IExpenseDetailsResponse,
  IUpdateExpenseRequest,
} from "@/shared/interfaces/http/expense-interface";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

interface Loadings {
  initial: boolean;
  action: boolean;
}

interface HandleLoadingParams {
  key: keyof Loadings;
  value: boolean;
}

type ExpenseContextType = {
  expenses: Expense[];
  handleCreateExpense: (
    activityId: string,
    params: ICreateExpenseRequest,
  ) => Promise<void>;
  loadings: Loadings;
  handleLoadings: (params: HandleLoadingParams) => void;
  handleCreatePayment: (
    expenseId: string,
    amountInCents: number,
  ) => Promise<void>;
  fetchExpenseDetails: (expenseId: string) => Promise<IExpenseDetailsResponse>;
  togglePayment: (expenseId: string, participantId: string) => Promise<void>;
  handleUpdateExpense: (
    expenseId: string,
    payload: IUpdateExpenseRequest,
  ) => Promise<void>;
  handleDeleteExpense: (expenseId: string) => Promise<void>;
};

export const ExpenseContext = createContext<ExpenseContextType>(
  {} as ExpenseContextType,
);

export const ExpenseContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loadings, setLoadings] = useState<Loadings>({
    initial: false,
    action: false,
  });
  const { handleError } = useErrorHandler();

  const handleLoadings = useCallback(({ key, value }: HandleLoadingParams) => {
    setLoadings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleCreateExpense = async (
    activityId: string,
    params: ICreateExpenseRequest,
  ) => {
    try {
      handleLoadings({ key: "action", value: true });

      const response = await expenseService.createExpense(activityId, params);

      setExpenses((prev) => [...prev, response]);
    } catch (error) {
      handleError(error, "Falha ao criar despesa");
      throw error;
    } finally {
      handleLoadings({ key: "action", value: false });
    }
  };

  const handleCreatePayment = async (
    expenseId: string,
    amountInCents: number,
  ) => {
    try {
      handleLoadings({ key: "action", value: true });
      await expenseService.createPayment(expenseId, { amountInCents });
    } catch (error) {
      handleError(error, "Falha ao registrar pagamento");
      throw error;
    } finally {
      handleLoadings({ key: "action", value: false });
    }
  };

  const togglePayment = async (expenseId: string, participantId: string) => {
    try {
      handleLoadings({ key: "action", value: true });
      await expenseService.toggleParticipantPayment(expenseId, participantId);
    } catch (error) {
      handleError(error, "Falha ao alterar status de pagamento");
      throw error;
    } finally {
      handleLoadings({ key: "action", value: false });
    }
  };

  const fetchExpenseDetails = async (
    expenseId: string,
  ): Promise<IExpenseDetailsResponse> => {
    try {
      return await expenseService.getExpenseDetails(expenseId);
    } catch (error) {
      handleError(error, "Falha ao buscar detalhes da despesa");
      throw error;
    }
  };

  const handleUpdateExpense = async (
    expenseId: string,
    payload: IUpdateExpenseRequest,
  ) => {
    try {
      handleLoadings({ key: "action", value: true });
      await expenseService.updateExpense(expenseId, payload);
    } catch (error) {
      handleError(error, "Falha ao atualizar despesa");
      throw error;
    } finally {
      handleLoadings({ key: "action", value: false });
    }
  };

  const handleDeleteExpense = async (expenseId: string): Promise<void> => {
    try {
      handleLoadings({ key: "action", value: true });
      await expenseService.deleteExpense(expenseId);
    } catch (error) {
      handleError(error, "Falha ao deletar despesa");
      throw error;
    } finally {
      handleLoadings({ key: "action", value: false });
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        handleCreateExpense,
        loadings,
        handleLoadings,
        handleCreatePayment,
        fetchExpenseDetails,
        handleUpdateExpense,
        handleDeleteExpense,
        togglePayment,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error(
      "useExpenseContext deve ser usado dentro de um ExpenseContextProvider",
    );
  }
  return context;
};
