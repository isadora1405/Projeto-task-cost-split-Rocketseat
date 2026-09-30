import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    gap: 8,
  },
  primaryBackground: {
    backgroundColor: colors.greenBase,
    borderWidth: 1,
    borderColor: colors.greenLight,
  },
  secondaryBackground: {
    backgroundColor: colors.gray600,
    borderWidth: 1,
    borderColor: colors.gray500,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    color: colors.gray800,
    fontFamily: fontFamily.semiBold,
  },
  primaryText: {
    color: colors.gray800,
  },
  secondaryText: {
    color: colors.gray200,
  },
});
