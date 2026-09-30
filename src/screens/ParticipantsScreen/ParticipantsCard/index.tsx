import { IParticipantSummary } from "@/shared/interfaces/participant-interface";
import { getInitials } from "@/shared/utils/getInitials";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

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
