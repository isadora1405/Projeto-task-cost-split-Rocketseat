import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#121216",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1b1b21",
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
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: "#fafafa",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  totalPrice: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: "#e1e1e6",
  },
  perPersonPrice: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    color: "#92929a",
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#1b1b21",
  },
  avatarStack: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#1b1b21",
    borderWidth: 1,
    borderColor: "#121216",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: "Sora_700Bold",
    fontSize: 9,
    color: "#e1e1e6",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
  },
});
