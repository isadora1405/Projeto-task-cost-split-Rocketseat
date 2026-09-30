export interface Participant {
  id: string;
  name: string;
  email: string;
}

export interface IExpenseParticipant {
  amountOwedInCents: number;
  userId: string;
  userName: string;
}

export interface IExpenseDetailParticipant {
  id: string;
  name: string;
  email: string;
  paymentStatus: string;
}

export interface IAddedParticipant {
  userId: string;
  name: string;
  joinedAt: string;
  email: string;
}

export interface IParticipantSummary {
  id: string;
  name: string;
  activitiesCount: number;
}
