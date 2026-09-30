import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 24,
    paddingBottom: 24,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: 14,
    color: colors.gray100,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 16,
    backgroundColor: colors.gray800,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray600,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  cardInfo: {
    flex: 1,
    justifyContent: "center",
  },
  currencyText: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: colors.gray200,
    letterSpacing: -0.4,
  },
  currencySymbol: {
    fontSize: 14,
    fontWeight: "600",
  },
  cardSubtitle: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 21,
  },
  subtitleMuted: {
    color: colors.gray300,
  },
  subtitleBold: {
    fontFamily: fontFamily.semiBold,
    color: colors.gray300,
  },
  miniCardsRow: {
    flexDirection: "row",
    gap: 8,
  },
  miniCard: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.gray800,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray600,
    gap: 4,
    position: "relative",
  },
  miniCardValue: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    color: colors.gray200,
    letterSpacing: -0.4,
  },
  miniCardLabel: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    lineHeight: 18,
    color: colors.gray300,
  },
  miniCardIcon: {
    position: "absolute",
    top: 12,
    right: 8,
  },
});
