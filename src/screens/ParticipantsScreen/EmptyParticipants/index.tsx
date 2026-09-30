import { View, Text } from "react-native";
import { styles } from "./style";
import { colors } from "@/styles";
import { ParticipantsIcon } from "@/components/Icons";

export function EmptyParticipants() {
  return (
    <View style={styles.container}>
      <ParticipantsIcon size={24} color={colors.gray400} />
      <Text style={styles.text}>
        Você ainda não adicionou participantes em atividades
      </Text>
    </View>
  );
}
