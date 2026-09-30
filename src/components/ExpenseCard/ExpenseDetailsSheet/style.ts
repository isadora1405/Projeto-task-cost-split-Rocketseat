import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 24,
    paddingBottom: 32,
    flexDirection: "column",
    gap: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerTextContainer: {
    gap: 4,
    flex: 1,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    color: colors.gray100,
    lineHeight: 30,
  },
  totalAmount: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.greenLight,
    lineHeight: 24,
  },
  content: {
    gap: 16,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  participantsCount: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray300,
  },
  mainStatusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  mainStatusText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  participantList: {
    paddingVertical: 16,
    gap: 20,
    borderTopWidth: 1,
    borderTopColor: colors.gray600,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray600,
  },
  participantRow: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
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
  participantInfo: {
    flex: 1,
  },
  participantName: {
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
    color: colors.gray200,
    lineHeight: 24,
  },
  participantAmount: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray300,
    lineHeight: 21,
  },
  statusToggleContainer: {
    flexDirection: "row",
    padding: 4,
    backgroundColor: colors.gray800,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray600,
    alignItems: "center",
    justifyContent: "center",
  },
  statusOptionActive: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
  statusOptionText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  statusOptionInactive: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  statusOptionInactiveText: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.gray300,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 32,
  },
  iconButton: {
    height: 48,
    width: 48,
    padding: 12,
    backgroundColor: colors.gray500,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.gray600,
    justifyContent: "center",
    alignItems: "center",
  },
});
