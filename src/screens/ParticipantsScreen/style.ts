import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.gray800,
  },
  container: {
    marginBottom: 8,
    padding: 24,
    paddingTop: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  header: {
    gap: 16,
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  logoIcon: {
    width: 16,
    height: 16,
  },
  logoText: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    letterSpacing: -0.36,
  },
  logoTextHighlight: {
    color: colors.greenLight,
  },
  logoTextNormal: {
    color: colors.greenBase,
    fontFamily: fontFamily.regular,
  },
  titleContainer: {
    gap: 4,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    color: colors.gray100,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray300,
    lineHeight: 24,
  },
});
