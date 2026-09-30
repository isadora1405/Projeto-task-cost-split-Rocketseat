import { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurTargetView, BlurView } from "expo-blur";
import { DetailsHeader } from "./DetailsHeader";
import { EmptyExpenses } from "./EmptyExpense";
import { CreateActivityModal } from "@/components/CreateActivityModal";
import { ExpenseCard, IExpenseProp } from "@/components/ExpenseCard";
import { CreateExpenseSheet } from "./CreateExpenseForm";
import { useActivityContext } from "@/context/activity.context";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { styles } from "./style";
import { Button } from "@/components/Button";
import { ExpenseDetailsSheet } from "@/components/ExpenseCard/ExpenseDetailsSheet";
import { colors } from "@/styles";
import { PlusIcon } from "@/components/Icons";
import { getInitials } from "@/shared/utils/getInitials";

export function ActivityDetails({ route, navigation }: any) {
  const { currentActivityDetails } = useActivityContext();
  const { isBottomSheetOpen, openBottomSheet } = useBottomSheetContext();

  const activityId = currentActivityDetails?.id || "";
  const activityTitle = currentActivityDetails?.name || "Atividade";
  const activityDate = currentActivityDetails?.activityDate
    ? new Date(currentActivityDetails.activityDate).toLocaleDateString("pt-BR")
    : "";

  const apiExpenses = currentActivityDetails?.expenses || [];
  const activityParticipants = currentActivityDetails?.participants || [];
  const totalAmountInCents = currentActivityDetails?.totalAmountInCents || 0;
  const displayExpenses: IExpenseProp[] = apiExpenses.map((exp) => {
    const totalConverted = exp.amountInCents / 100;
    const qtyParticipants = exp.participants?.length || 1;

    return {
      id: exp.id,
      name: exp.name,
      totalAmount: totalConverted,
      amountPerPerson: totalConverted / qtyParticipants,
      participants:
        exp.participants?.map((p) => ({
          id: p.id,
          name: p.name,
          initials: getInitials(p.name),
        })) || [],
      status:
        (exp.paymentStatus as "Pago" | "Pendente" | "Parcial") || "Pendente",
    };
  });

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const backgroundRef = useRef<View>(null);

  const handleBack = () => navigation.goBack();
  const handleDeleteActivity = (id: string) => {
    setIsEditModalVisible(false);
    navigation.goBack();
  };

  const shouldBlur = isEditModalVisible || isBottomSheetOpen;

  const renderListHeader = () => (
    <View style={styles.headerWrapper}>
      <DetailsHeader
        title={activityTitle}
        date={activityDate}
        participants={activityParticipants}
        totalAmountInCents={totalAmountInCents}
        hasExpenses={displayExpenses.length > 0}
        onBack={handleBack}
        onEdit={() => setIsEditModalVisible(true)}
      />

      <View style={styles.listTitleContainer}>
        <Text style={styles.listTitle}>Despesas</Text>
        <Text style={styles.listCount}>{displayExpenses.length}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.contentContainer}>
      <BlurTargetView style={{ flex: 1 }} ref={backgroundRef}>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
            data={displayExpenses}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={renderListHeader}
            ListEmptyComponent={<EmptyExpenses />}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  openBottomSheet(
                    <ExpenseDetailsSheet
                      expenseId={item.id}
                      activityId={activityId}
                    />,
                    1,
                  );
                }}
              >
                <ExpenseCard expense={item} />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </BlurTargetView>

      {displayExpenses.length > 0 && (
        <Button
          variant="primary"
          icon={<PlusIcon size={20} color={colors.gray800} />}
          style={styles.fab}
          onPress={() => openBottomSheet(<CreateExpenseSheet />, 1)}
        >
          Nova
        </Button>
      )}

      {shouldBlur && (
        <BlurView
          intensity={30}
          tint="dark"
          blurMethod="dimezisBlurView"
          blurTarget={backgroundRef}
          style={[StyleSheet.absoluteFill, { zIndex: 99 }]}
        />
      )}

      <CreateActivityModal
        visible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        activityToEdit={{
          id: activityId,
          title: activityTitle,
          date: currentActivityDetails?.activityDate || "",
        }}
        onDelete={handleDeleteActivity}
      />
    </View>
  );
}
