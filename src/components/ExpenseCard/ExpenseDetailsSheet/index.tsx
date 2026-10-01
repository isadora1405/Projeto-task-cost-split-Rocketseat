import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { useExpenseContext } from "@/context/expense.context";
import { useActivityContext } from "@/context/activity.context";
import { IExpenseDetailsResponse } from "@/shared/interfaces/http/expense-interface";
import { styles } from "./style";
import { Button } from "@/components/Button";
import { CreateExpenseSheet } from "@/screens/ActivityDetails/CreateExpenseForm";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { colors } from "@/styles";
import { CloseIcon, PencilIcon, TrashIcon } from "@/components/Icons";
import { formatCurrency } from "@/shared/utils/formatCurrency";
import { getInitials } from "@/shared/utils/getInitials";
import { getStatusStyle } from "@/shared/utils/getStatusStyle";
import { mapBackendStatus } from "@/shared/utils/mapBackendStatus";

interface ExpenseDetailsSheetProps {
  activityId: string;
  expenseId: string;
}

export function ExpenseDetailsSheet({
  activityId,
  expenseId,
}: ExpenseDetailsSheetProps) {
  const { closeBottomSheet, openBottomSheet } = useBottomSheetContext();
  const {
    fetchExpenseDetails,
    togglePayment,
    handleCreatePayment,
    handleDeleteExpense,
  } = useExpenseContext();
  const { fetchActivityDetails } = useActivityContext();
  const { handleError } = useErrorHandler();
  const [expense, setExpense] = useState<IExpenseDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExpenseData();
  }, [expenseId]);

  const loadExpenseData = async () => {
    try {
      setLoading(true);
      const data = await fetchExpenseDetails(expenseId);
      setExpense(data);
    } catch (error) {
      handleError(error, "Falha ao carregar detalhes da despesa.");
      closeBottomSheet();
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (
    userId: string,
    currentStatus: string,
    amountOwed: number,
  ) => {
    const newStatus = currentStatus === "Pago" ? "Pendente" : "Pago";

    setExpense((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        participants: prev.participants.map((p) =>
          p.userId === userId
            ? { ...p, paymentStatus: newStatus === "Pago" ? "paid" : "pending" }
            : p,
        ),
      };
    });

    try {
      if (newStatus === "Pago") {
        await handleCreatePayment(expenseId, amountOwed);
      } else {
        await togglePayment(expenseId, userId);
      }
      await fetchActivityDetails(activityId);
      await loadExpenseData();
    } catch (error) {
      handleError(error, "Falha na mudança de status.");
    }
  };

  const handleDelete = async () => {
    try {
      await handleDeleteExpense(expenseId);
      await fetchActivityDetails(activityId);
      closeBottomSheet();
    } catch (error) {
      handleError(error, "Falha ao excluir despesa.");
    }
  };

  if (loading || !expense) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center", height: 250 },
        ]}
      >
        <ActivityIndicator size="large" color={colors.gray200} />
      </View>
    );
  }

  const allPaid = expense.participants.every(
    (p) => mapBackendStatus(p.paymentStatus) === "Pago",
  );
  const allPending = expense.participants.every(
    (p) => mapBackendStatus(p.paymentStatus) === "Pendente",
  );
  const currentOverallStatus = allPaid
    ? "Pago"
    : allPending
      ? "Pendente"
      : "Parcial";
  const mainStatusStyle = getStatusStyle(currentOverallStatus);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {expense.name}
          </Text>
          <Text style={styles.totalAmount} numberOfLines={1}>
            {formatCurrency(expense.amountInCents, true)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={closeBottomSheet}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <CloseIcon size={16} color={colors.gray300} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.subHeader}>
          <Text style={styles.participantsCount}>
            {expense.participants.length} participante
            {expense.participants.length !== 1 && "s"}
          </Text>
          <View
            style={[
              styles.mainStatusBadge,
              { backgroundColor: mainStatusStyle.bg },
            ]}
          >
            <Text
              style={[styles.mainStatusText, { color: mainStatusStyle.text }]}
            >
              {currentOverallStatus}
            </Text>
          </View>
        </View>

        <View style={styles.participantList}>
          {expense.participants.map((participant) => {
            const status = mapBackendStatus(participant.paymentStatus);

            return (
              <View key={participant.userId} style={styles.participantRow}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {getInitials(participant.name)}
                  </Text>
                </View>

                <View style={styles.participantInfo}>
                  <Text style={styles.participantName} numberOfLines={1}>
                    {participant.name}
                  </Text>
                  <Text style={styles.participantAmount} numberOfLines={1}>
                    {formatCurrency(participant.amountOwedInCents, true)}
                  </Text>
                </View>

                <View style={styles.statusToggleContainer}>
                  {status === "Pendente" ? (
                    <>
                      <View
                        style={[
                          styles.statusOptionActive,
                          {
                            backgroundColor: getStatusStyle("Pendente").bg,
                            borderColor: getStatusStyle("Pendente").border,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.statusOptionText,
                            { color: getStatusStyle("Pendente").text },
                          ]}
                        >
                          Pendente
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={styles.statusOptionInactive}
                        onPress={() =>
                          handleToggleStatus(
                            participant.userId,
                            status,
                            participant.amountOwedInCents,
                          )
                        }
                      >
                        <Text style={styles.statusOptionInactiveText}>
                          Pago
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      <TouchableOpacity
                        style={styles.statusOptionInactive}
                        onPress={() =>
                          handleToggleStatus(
                            participant.userId,
                            status,
                            participant.amountOwedInCents,
                          )
                        }
                      >
                        <Text style={styles.statusOptionInactiveText}>
                          Pendente
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={[
                          styles.statusOptionActive,
                          {
                            backgroundColor: getStatusStyle("Pago").bg,
                            borderColor: getStatusStyle("Pago").border,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.statusOptionText,
                            { color: getStatusStyle("Pago").text },
                          ]}
                        >
                          Pago
                        </Text>
                      </View>
                    </>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handleDelete}
            activeOpacity={0.7}
          >
            <TrashIcon size={24} color={colors.dangerLight} />
          </TouchableOpacity>
          <Button
            onPress={() => {
              openBottomSheet(
                <CreateExpenseSheet expenseToEdit={expense} />,
                1,
              );
            }}
            variant="secondary"
            icon={<PencilIcon size={24} color={colors.gray300} />}
            style={{ width: "40%" }}
          >
            Editar
          </Button>
        </View>
      </View>
    </View>
  );
}
