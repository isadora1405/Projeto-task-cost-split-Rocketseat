import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as authService from "@/shared/services/auth.service";
import { FormLoginParams } from "@/screens/Login/LoginForm";
import { FormRegisterParams } from "@/screens/Register/RegisterForm";
import { IUser } from "@/shared/interfaces/user-interface";
import { takCostSplitApi } from "@/shared/api/task-cost-split";
import { IAuthenticateResponse } from "@/shared/interfaces/http/authenticate-response";

type AuthContextType = {
  user: IUser | null;
  token: string | null;
  handleAuthenticate: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => Promise<void>;
  restoreUserSession: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

const STORAGE_KEY = "@expense_split:user";

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const setAuthHeader = (token: string) => {
    takCostSplitApi.defaults.headers.common["Authorization"] =
      `Bearer ${token}`;
  };

  const handleAuthenticate = async (userData: FormLoginParams) => {
    const response = await authService.authenticate(userData);
    const { token: authToken, ...loggedUser } = response;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(response));
    setUser(loggedUser);
    setToken(authToken);
    setAuthHeader(authToken);
  };

  const handleRegister = async (formData: FormRegisterParams) => {
    const response = await authService.registerUser(formData);
    const { token: authToken, ...loggedUser } = response;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(response));
    setUser(loggedUser);
    setToken(authToken);
    setAuthHeader(authToken);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    delete takCostSplitApi.defaults.headers.common["Authorization"];
    setUser(null);
    setToken(null);
  };

  const restoreUserSession = async () => {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const response = JSON.parse(storedData) as IAuthenticateResponse;
      const { token: authToken, ...loggedUser } = response;
      setUser(loggedUser);
      setToken(authToken);
      setAuthHeader(authToken);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleAuthenticate,
        handleRegister,
        handleLogout,
        token,
        user,
        restoreUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
