import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.gray800,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 250,
  },
  logoImage: {
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  logoText: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: fontFamily.bold,
  },
  logoTextGreen: {
    color: colors.greenBase,
  },
  logoTextLight: {
    color: colors.greenLight,
    fontFamily: fontFamily.regular,
  },
  formContainer: {
    backgroundColor: colors.gray700,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 32,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
  },
  title: {
    color: colors.gray100,
    fontSize: 20,
    fontFamily: fontFamily.semiBold,
    lineHeight: 30,
    marginBottom: 32,
  },
  inputsContainer: {
    width: "100%",
    gap: 16,
    marginBottom: 32,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colors.gray600,
    marginTop: 32,
    marginBottom: 32,
  },
  registerText: {
    color: colors.gray200,
    fontSize: 14,
    marginBottom: 16,
    fontFamily: fontFamily.regular,
  },
});
