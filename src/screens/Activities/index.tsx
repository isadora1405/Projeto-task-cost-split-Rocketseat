import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurTargetView, BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@/components/Button";
import { CreateActivityModal } from "@/components/CreateActivityModal";
import { styles } from "./style";
import { ListHeader } from "./ListHeader";
import { EmptyList } from "./EmptyList";
import { ActivityCard } from "@/components/ActivityCard";
import { useActivityContext } from "@/context/activity.context";
import { Activity } from "@/shared/interfaces/http/activity-interface";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { colors } from "@/styles";
import { PlusIcon } from "@/components/Icons";

export function Activities(): React.JSX.Element {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const backgroundRef = useRef<View>(null);
  const navigation = useNavigation<any>();

  const { activities, fetchActivities, fetchActivityDetails, handleLoadings } =
    useActivityContext();
  const { handleError } = useErrorHandler();

  const handleInitialActivities = async () => {
    try {
      handleLoadings({ key: "initial", value: true });
      await fetchActivities();
    } catch (error) {
      handleError(error, "Falha ao buscar atividades");
    } finally {
      handleLoadings({ key: "initial", value: false });
    }
  };

  useEffect(() => {
    handleInitialActivities();
  }, []);

  const handleActivityPress = async (activity: Activity) => {
    if (isNavigating) return;

    try {
      setIsNavigating(true);
      await fetchActivityDetails(activity.id);
      navigation.navigate("activityDetails", {
        activityId: activity.id,
        title: activity.name,
        date: new Date(activity.activityDate).toLocaleDateString("pt-BR"),
      });
    } catch (error) {
      handleError(error, "Falha ao carregar os detalhes da atividade");
    } finally {
      setIsNavigating(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <BlurTargetView style={{ flex: 1 }} ref={backgroundRef}>
        <SafeAreaView style={styles.safeArea}>
          <FlatList
            contentContainerStyle={styles.scrollContent}
            data={activities}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={ListHeader}
            ListEmptyComponent={EmptyList}
            renderItem={({ item }) => (
              <ActivityCard
                activity={item}
                onPress={() => handleActivityPress(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.fabContainer}>
            <Button
              variant="primary"
              icon={<PlusIcon size={24} color={colors.gray800} />}
              style={styles.fabButton}
              onPress={() => setIsModalVisible(true)}
            >
              Criar
            </Button>
          </View>
        </SafeAreaView>
      </BlurTargetView>

      {isNavigating && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              zIndex: 100,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          ]}
        >
          <ActivityIndicator size="large" color={colors.white} />
        </View>
      )}

      {isModalVisible && (
        <BlurView
          intensity={30}
          tint="dark"
          blurMethod="dimezisBlurView"
          blurTarget={backgroundRef}
          style={[StyleSheet.absoluteFill, { zIndex: 99 }]}
        />
      )}

      <CreateActivityModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
}
