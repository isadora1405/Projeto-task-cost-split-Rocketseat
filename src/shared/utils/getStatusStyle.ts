import { colors } from "@/styles";

export const getStatusStyle = (status: string) => {
  switch (status) {
    case "Pago":
      return {
        bg: colors.successLow,
        text: colors.successLight,
        border: colors.gray600,
      };
    case "Pendente":
      return {
        bg: colors.dangerLow,
        text: colors.dangerLight,
        border: colors.gray600,
      };
    case "Parcial":
      return {
        bg: colors.alertLow,
        text: colors.alertLight,
        border: colors.gray600,
      };
    default:
      return { bg: "#1b1b21", text: "#92929a", border: colors.gray600 };
  }
};
