import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    elevation: 99,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  content: {
    width: "100%",
    maxWidth: 358,
    backgroundColor: colors.gray700,
    borderRadius: 10,
    padding: 24,
    gap: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray100,
  },
  formContainer: {
    gap: 12,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 16,
    marginTop: 8,
  },
  deleteButton: {
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: colors.gray600,
    borderWidth: 1,
    borderColor: colors.gray500,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonContainer: {
    width: "40%",
  },
});
