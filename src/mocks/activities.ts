export interface IActivityMock {
  id: string;
  title: string;
  totalAmount: number;
  date: string;
  peopleCount: number;
  expenseCount: number;
}

export const MOCK_ACTIVITIES: IActivityMock[] = [
  {
    id: '1',
    title: 'Férias de verão',
    totalAmount: 4500.00,
    date: '20/12/25',
    peopleCount: 6,
    expenseCount: 3,
  },
  {
    id: '2',
    title: 'Jantar',
    totalAmount: 600.00,
    date: '15/10/25',
    peopleCount: 4,
    expenseCount: 4,
  },
  {
    id: '3',
    title: 'Almoço',
    totalAmount: 300.00,
    date: '22/10/25',
    peopleCount: 4,
    expenseCount: 5,
  },
];