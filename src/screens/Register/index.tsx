import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { RegisterForm } from "./RegisterForm";

const LogoImage = require("../../../assets/images/Logo.png");

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={LogoImage}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>
              <Text style={styles.logoTextGreen}>TaskCost</Text>
              <Text style={styles.logoTextLight}> Split</Text>
            </Text>
          </View>

          <RegisterForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
