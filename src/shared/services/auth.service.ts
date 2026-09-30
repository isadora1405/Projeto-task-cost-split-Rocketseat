import { takCostSplitApi } from '../api/task-cost-split';
import { FormLoginParams } from '@/screens/Login/LoginForm';
import { FormRegisterParams } from '@/screens/Register/RegisterForm';
import { IAuthenticateResponse } from '../interfaces/http/authenticate-response';


export const authenticate = async (userData: FormLoginParams): Promise<IAuthenticateResponse> => {
  const { data } = await takCostSplitApi.post<IAuthenticateResponse>('/users/sign-in', userData);
  return data;
};

export const registerUser = async (userData: FormRegisterParams): Promise<IAuthenticateResponse> => {
  const { data } = await takCostSplitApi.post<IAuthenticateResponse>('/users/sign-up', userData);
  return data;
};