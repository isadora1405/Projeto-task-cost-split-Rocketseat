import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.gray700,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray600,
    padding: 16,
    marginBottom: 12,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8,
  },
  title: {
    flex: 1,
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray100,
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  totalPrice: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.gray200,
  },
  perPersonPrice: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.gray300,
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.gray600,
  },
  avatarStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.gray600,
    borderWidth: 1,
    borderColor: colors.gray700,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: fontFamily.semiBold,
    fontSize: 9,
    color: colors.gray200,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
});
