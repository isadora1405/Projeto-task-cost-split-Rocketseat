import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Sora_700Bold } from "@expo-google-fonts/sora";
import { useCallback } from "react";
import NavigationRoutes from "@/routes";
import { AuthContextProvider } from "@/context/auth.context";
import { ActivityContextProvider } from "@/context/activity.context";
import { BottomSheetProvider } from "@/context/bottomsheet.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ExpenseContextProvider } from "@/context/expense.context";
import { ParticipantContextProvider } from "@/context/participants.context";
import { StatisticsProvider } from "@/context/statistics.context";
import { SnackbarContextProvider } from "@/context/snackbar.context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Sora_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <SnackbarContextProvider>
          <AuthContextProvider>
            <ActivityContextProvider>
              <ParticipantContextProvider>
                <ExpenseContextProvider>
                  <StatisticsProvider>
                    <BottomSheetProvider>
                      <NavigationRoutes />
                    </BottomSheetProvider>
                  </StatisticsProvider>
                </ExpenseContextProvider>
              </ParticipantContextProvider>
            </ActivityContextProvider>
          </AuthContextProvider>
        </SnackbarContextProvider>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
