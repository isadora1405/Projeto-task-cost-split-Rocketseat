import { View, Image, Text } from "react-native";
import { styles } from "../style";

const LogoImage = require("../../../../assets/images/Logo.png");

export function ListHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoIcon}
            source={LogoImage}
            resizeMode="cover"
          />
          <Text style={styles.logoText}>
            <Text style={styles.logoTextHighlight}>TaskCost</Text>
            <Text style={styles.logoTextNormal}> Split</Text>
          </Text>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Participantes</Text>
        <Text style={styles.subtitle}>
          Pessoas com quem você já dividiu tarefas
        </Text>
      </View>
    </View>
  );
}
