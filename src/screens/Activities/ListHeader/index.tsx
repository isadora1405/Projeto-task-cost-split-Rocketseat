import { View, Text, Image } from "react-native";
import { styles } from "../style";

const LogoImage = require("../../../../assets/images/Logo.png");

export function ListHeader() {
  return (
    <View>
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
        <Text style={styles.title}>Atividades</Text>
        <Text style={styles.subtitle}>Organize suas despesas divididas</Text>
      </View>
    </View>
  );
}
