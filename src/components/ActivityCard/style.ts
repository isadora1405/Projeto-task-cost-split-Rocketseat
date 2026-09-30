import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.gray700,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray600,
    padding: 16,
    gap: 12,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray100,
    flex: 1,
  },
  amount: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 21,
    color: colors.gray200,
  },
  divider: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.gray400,
    paddingTop: 16,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badgeText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray400,
  },
});
