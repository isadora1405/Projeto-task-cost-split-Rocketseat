import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingVertical: 40,
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray400,
    textAlign: "center",
    lineHeight: 21,
    maxWidth: 200,
  },
});
