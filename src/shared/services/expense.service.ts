import { takCostSplitApi } from "../api/task-cost-split";
import {
  ICreateExpenseRequest,
  ICreateExpenseResponse,
  IExpenseDetailsResponse,
  IUpdateExpenseRequest,
  IUpdateExpenseResponse,
} from "../interfaces/http/expense-interface";
import {
  ICreatePaymentRequest,
  ITogglePaymentResponse,
} from "../interfaces/http/payment-interface";

export const createExpense = async (
  activityId: string,
  expenseData: ICreateExpenseRequest,
): Promise<ICreateExpenseResponse> => {
  const { data } = await takCostSplitApi.post<ICreateExpenseResponse>(
    `/activities/${activityId}/expenses`,
    expenseData,
  );
  return data;
};

export const toggleParticipantPayment = async (
  expenseId: string,
  participantId: string,
): Promise<ITogglePaymentResponse> => {
  const { data } = await takCostSplitApi.put<ITogglePaymentResponse>(
    `/expenses/${expenseId}/participants/${participantId}/payment/toggle`,
  );
  return data;
};

export const createPayment = async (
  expenseId: string,
  params: ICreatePaymentRequest,
): Promise<any> => {
  const { data } = await takCostSplitApi.post(
    `/expenses/${expenseId}/payments`,
    params,
  );
  return data;
};

export const getExpenseDetails = async (
  expenseId: string,
): Promise<IExpenseDetailsResponse> => {
  const { data } = await takCostSplitApi.get<IExpenseDetailsResponse>(
    `/expenses/${expenseId}`,
  );
  return data;
};

export const updateExpense = async (
  expenseId: string,
  params: IUpdateExpenseRequest,
): Promise<IUpdateExpenseResponse> => {
  const { data } = await takCostSplitApi.put<IUpdateExpenseResponse>(
    `/expenses/${expenseId}`,
    params,
  );
  return data;
};

export const deleteExpense = async (expenseId: string): Promise<void> => {
  await takCostSplitApi.delete(`/expenses/${expenseId}`);
};
