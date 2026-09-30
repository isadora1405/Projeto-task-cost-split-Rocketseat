export interface ITogglePaymentResponse {
  participantEmail: string;
  amountPaidInCents: number;
  paymentStatus: string;
  participantName: string;
  participantId: string;
  remainingDebtInCents: number;
  amountOwedInCents: number;
  expenseId: string;
}

export interface ICreatePaymentRequest {
  amountInCents: number;
}
