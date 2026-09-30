import { IParticipantSummary } from "@/shared/interfaces/participant-interface";
import { getInitials } from "@/shared/utils/getInitials";
import { View, Text, StyleSheet } from "react-native";

interface ParticipantCardProps {
  participant: IParticipantSummary;
}

export function ParticipantCard({ participant }: ParticipantCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{getInitials(participant.name)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {participant.name}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          Em {participant.activitiesCount} atividade
          {participant.activitiesCount !== 1 && "s"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 16,
    backgroundColor: "#0b0b0e",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1b1b21",
  },
  avatar: {
    width: 42,
    height: 42,
    backgroundColor: "#1b1b21",
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 14,
    color: "#e1e1e6",
  },
  info: {
    flex: 1,
  },
  name: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: "#fafafa",
    lineHeight: 24,
  },
  subtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#58585f",
    lineHeight: 21,
  },
});
