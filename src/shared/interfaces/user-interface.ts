export interface IUser {
  id: string;
  name: string;
  email: string;
  isInActivity?: boolean;
}

export interface IStatisticsResponse {
  expensesCount: number;
  uniqueParticipantsCount: number;
  paidExpensesCount: number;
  expensesToPayCount: number;
  amountPaidInCents: number;
  amountToPayInCents: number;
  activitiesCount: number;
  totalExpensesAmountInCents: number;
}
