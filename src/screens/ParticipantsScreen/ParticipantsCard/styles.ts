import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 16,
    backgroundColor: colors.gray800,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray600,
  },
  avatar: {
    width: 42,
    height: 42,
    backgroundColor: colors.gray600,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.gray200,
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray100,
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray700,
    lineHeight: 21,
  },
});
