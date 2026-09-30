import { colors, fontFamily } from "@/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 12,
    alignSelf: "stretch",
    position: "relative",
    marginBottom: 0,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 24,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.gray800,
  },
  backText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.greenLight,
  },
  infoContainer: {
    gap: 4,
    paddingRight: 56,
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    color: colors.gray100,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateText: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray300,
  },
  editButton: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: colors.gray600,
    borderWidth: 1,
    borderColor: colors.gray500,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    marginTop: 80,
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray400,
    textAlign: "center",
    maxWidth: 220,
    lineHeight: 21,
  },
  button: {
    width: "auto",
    paddingHorizontal: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.gray800,
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerWrapper: {
    marginBottom: 16,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    marginTop: 0,
    marginBottom: 32,
  },
  summaryLeft: {
    gap: 8,
  },
  totalAvatarStack: {
    flexDirection: "row",
  },
  totalAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#1b1b21",
    borderWidth: 1,
    borderColor: "#0b0b0e",
    justifyContent: "center",
    alignItems: "center",
  },
  totalAvatarText: {
    fontFamily: "Sora_700Bold",
    fontSize: 9,
    color: "#e1e1e6",
  },
  summaryRight: {
    alignItems: "flex-end",
    gap: 2,
  },
  totalAmountText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: "#70d597",
  },
  summaryText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#58585f",
  },
  listTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 16,
  },
  listTitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    color: "#e1e1e6",
  },
  listCount: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#58585f",
  },
  fab: {
    width: "auto",
    position: "absolute",
    bottom: 32,
    right: 24,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 8,
    zIndex: 90,
  },
});
