import { IExpensePayment } from "../expense-interface";
import { IExpenseParticipant } from "../participant-interface";

export interface ICreateExpenseRequest {
  title: string;
  amountInCents: number;
  payerId: string;
  participantsIds: string[];
}

export interface ICreateExpenseResponse {
  id: string;
  name: string;
  amountInCents: number;
  payerId: string;
  payerName: string;
  activityId: string;
  createdAt: string;
  participants: IExpenseParticipant[];
}

export interface IExpenseParticipantDetails {
  amountPaidInCents: number;
  paymentStatus: string;
  email: string;
  name: string;
  userId: string;
  remainingDebtInCents: number;
  amountOwedInCents: number;
}

export interface IExpenseDetailsResponse {
  id: string;
  name: string;
  amountInCents: number;
  activityId: string;
  activityName: string;
  createdAt: string;
  payer: {
    email: string;
    userId: string;
    name: string;
  };
  payments: IExpensePayment[];
  participants: IExpenseParticipantDetails[];
}

export interface IUpdateExpenseRequest {
  title: string;
  amountInCents: number;
  payerId: string;
  participantsIds: string[];
}

export interface IUpdateExpenseResponse {
  id: string;
  name: string;
  amountInCents: number;
  payerId: string;
  payerName: string;
  activityId: string;
  createdAt: string;
  participants: {
    userId: string;
    userName: string;
    amountOwedInCents: number;
  }[];
}

export type Expense = ICreateExpenseResponse;
