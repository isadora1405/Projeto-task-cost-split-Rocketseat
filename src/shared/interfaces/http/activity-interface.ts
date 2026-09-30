import {
  IExpenseDetailParticipant,
  Participant,
} from "../participant-interface";

export interface Activity {
  id: string;
  name: string;
  activityDate: string;
  totalAmountInCents: number;
  expensesAmount: number;
  participantsAmount: number;
  participants: Participant[];
}

export interface ICreateActivityRequest {
  title: string;
  activityDate: string;
}

export interface ICreateActivityResponse {
  id: string;
  name: string;
  activityDate: string;
  createdAt: string;
}

export interface IGetActivitiesResponse {
  activities: Activity[];
}

export interface IUpdateActivityRequest {
  title: string;
  activityDate: string;
}

export interface IUpdateActivityResponse {
  id: string;
  name: string;
  activityDate: string;
  createdAt: string;
}

export interface IActivityExpense {
  id: string;
  name: string;
  amountInCents: number;
  payerId: string;
  payerName: string;
  paymentStatus: string;
  participants: IExpenseDetailParticipant[];
}

export interface IGetActivityDetailsResponse {
  id: string;
  name: string;
  activityDate: string;
  totalAmountInCents: number;
  participants: Participant[];
  expenses: IActivityExpense[];
}
