import { colors, fontFamily } from "@/styles";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.gray800,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 24,
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
    marginBottom: 20,
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
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 60,
  },
  emptyStateText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray400,
    textAlign: "center",
    maxWidth: 200,
  },
  fabContainer: {
    position: "absolute",
    bottom: 24,
    right: 24,
    zIndex: 10,
  },
  fabButton: {
    width: "auto",
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
