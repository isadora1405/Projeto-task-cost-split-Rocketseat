import { useCallback } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyParticipants } from "./EmptyParticipants";
import { styles } from "./style";
import { ParticipantCard } from "./ParticipantsCard";
import { ListHeader } from "./ListHeader";
import { useAuthContext } from "@/context/auth.context";
import { useParticipantContext } from "@/context/participants.context";
import { useFocusEffect } from "@react-navigation/native";

export function ParticipantsScreen() {
  const { user } = useAuthContext();
  const {
    globalParticipants,
    loadingParticipants,
    fetchParticipantsFromActivities,
  } = useParticipantContext();

  useFocusEffect(
    useCallback(() => {
      if (user?.id) {
        fetchParticipantsFromActivities(user.id);
      }
    }, [user?.id]),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ListHeader />
      {loadingParticipants ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#30a65d" />
        </View>
      ) : (
        <FlatList
          data={globalParticipants}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          ListEmptyComponent={<EmptyParticipants />}
          renderItem={({ item }) => <ParticipantCard participant={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}
