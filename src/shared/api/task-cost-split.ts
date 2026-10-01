import axios from "axios";
import { Platform } from "react-native";
import { AppError } from "../helpers/AppError";

//A config abaixo é para rodar a apliicação em device físico. Caso utilize emulador, fazer ajustes necessários

const IP_MAQUINA = ""; //Adicionar o IP da máquina para rodar o App

const baseURL = Platform.select({
  ios: `http://${IP_MAQUINA}:8080/api/v1`,
  android: `http://${IP_MAQUINA}:8080/api/v1`,
});

export const takCostSplitApi = axios.create({
  baseURL,
});

takCostSplitApi.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response && error.response.data) {
      const errorMessage =
        error.response.data.reason ||
        error.response.data.message ||
        "Erro na requisição";
      return Promise.reject(new AppError(errorMessage));
    }
    return Promise.reject(new AppError("Falha na conexão com o servidor"));
  },
);
