import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    color: colors.gray300,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    marginBottom: 8,
  },
  labelFocused: {
    color: colors.greenBase,
    fontFamily: fontFamily.semiBold,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray800,
    borderWidth: 1,
    borderColor: colors.gray600,
    borderRadius: 8,
    paddingHorizontal: 16,
    minHeight: 56,
  },
  containerFocused: {
    borderColor: colors.greenBase,
  },
  containerError: {
    borderColor: colors.dangerLight,
  },
  containerMultiline: {
    alignItems: "flex-start",
    paddingTop: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  prefix: {
    color: colors.gray100,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: colors.gray100,
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
  inputMultiline: {
    textAlignVertical: "top",
    minHeight: 100,
  },
  errorText: {
    color: colors.dangerLight,
    fontFamily: fontFamily.regular,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
