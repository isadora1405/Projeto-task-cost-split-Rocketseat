import { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  LayoutChangeEvent,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CurrencyInput from "react-native-currency-input";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { useActivityContext } from "@/context/activity.context";
import { useExpenseContext } from "@/context/expense.context";
import { useAuthContext } from "@/context/auth.context";
import { useParticipantContext } from "@/context/participants.context";
import * as Yup from "yup";
import { Button } from "@/components/Button";
import { styles } from "./style";
import { IExpenseDetailsResponse } from "@/shared/interfaces/http/expense-interface";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { colors } from "@/styles";
import {
  CheckCircleIcon,
  CloseIcon,
  ParticipantsIcon,
  TrashIcon,
} from "@/components/Icons";
import { getInitials } from "@/shared/utils/getInitials";
import { expenseSchema } from "./schema";

interface CreateExpenseSheetProps {
  expenseToEdit?: IExpenseDetailsResponse | null;
}

export interface CreateExpenseInterface {
  title: string;
  amount: number;
  participantIds: string[];
}

type ValidationErrorsTypes = Record<keyof CreateExpenseInterface, string>;

export const CreateExpenseSheet: FC<CreateExpenseSheetProps> = ({
  expenseToEdit,
}) => {
  const { closeBottomSheet } = useBottomSheetContext();
  const { currentActivityDetails, fetchActivityDetails } = useActivityContext();
  const { handleCreateExpense: createExpenseApi, handleUpdateExpense } =
    useExpenseContext();
  const { user } = useAuthContext();
  const {
    users,
    fetchUsers,
    addParticipants,
    removeParticipant,
    loadings: participantLoadings,
  } = useParticipantContext();
  const { handleError } = useErrorHandler();

  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] =
    useState<ValidationErrorsTypes>();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(60);
  const isEditing = !!expenseToEdit;

  const [expense, setExpense] = useState<CreateExpenseInterface>({
    title: expenseToEdit?.name || "",
    amount: expenseToEdit ? expenseToEdit.amountInCents / 100 : 0,
    participantIds: expenseToEdit?.participants.map((p) => p.userId) || [],
  });

  const activityId = currentActivityDetails?.id;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const toggleParticipant = (id: string) => {
    setExpense((prevData) => {
      const currentIds = prevData.participantIds;
      const exists = currentIds.includes(id);

      const updatedIds = exists
        ? currentIds.filter((pid) => pid !== id)
        : [...currentIds, id];

      return { ...prevData, participantIds: updatedIds };
    });
  };

  const handleSaveExpense = async () => {
    try {
      setLoading(true);
      await expenseSchema.validate(expense, { abortEarly: false });

      if (!user?.id || !activityId) {
        Alert.alert(
          "Erro",
          "Não foi possível identificar o usuário ou atividade.",
        );
        return;
      }

      const existingParticipantsInActivity =
        currentActivityDetails?.participants.map((p) => p.id) || [];
      const missingParticipantIds = expense.participantIds.filter(
        (id) => !existingParticipantsInActivity.includes(id),
      );

      if (missingParticipantIds.length > 0) {
        await addParticipants(activityId, {
          participantsIds: missingParticipantIds,
        });
      }

      const payload = {
        title: expense.title,
        amountInCents: Math.round(expense.amount * 100),
        payerId: user.id,
        participantsIds: expense.participantIds,
      };

      if (isEditing && expenseToEdit) {
        await handleUpdateExpense(expenseToEdit.id, payload);
      } else {
        await createExpenseApi(activityId, payload);
      }

      await fetchActivityDetails(activityId);
      closeBottomSheet();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {} as ValidationErrorsTypes;
        error.inner.forEach((err) => {
          if (err.path)
            errors[err.path as keyof CreateExpenseInterface] = err.message;
        });
        setValidationErrors(errors);
      } else {
        handleError(error, "Falha ao salvar despesa");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveParticipant = async (participantId: string) => {
    if (!activityId) return;

    try {
      await removeParticipant(activityId, participantId);

      toggleParticipant(participantId);

      await fetchActivityDetails(activityId);
    } catch (error) {
      handleError(error, "Falha ao remover o participante da atividade");
    }
  };

  const selectedParticipants = users.filter((p) =>
    expense.participantIds.includes(p.id),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {isEditing ? "Editar despesa" : "Nova despesa"}
        </Text>
        <TouchableOpacity
          onPress={closeBottomSheet}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <CloseIcon color={colors.gray300} size={16} />
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <View pointerEvents={isDropdownOpen ? "none" : "auto"}>
          <TextInput
            placeholder="Título"
            placeholderTextColor={colors.gray400}
            value={expense.title}
            onChangeText={(text) =>
              setExpense((prev) => ({ ...prev, title: text }))
            }
            style={styles.input}
          />

          <View style={styles.currencyContainer}>
            <Text style={styles.currencyPrefix}>R$</Text>
            <CurrencyInput
              value={expense.amount}
              delimiter="."
              separator=","
              precision={2}
              minValue={0}
              onChangeValue={(value) =>
                setExpense((prev) => ({ ...prev, amount: value ?? 0 }))
              }
              placeholder="0,00"
              placeholderTextColor={colors.gray400}
              style={[
                styles.currencyInputControl,
                { color: expense.amount > 0 ? colors.gray200 : colors.gray400 },
              ]}
            />
          </View>
        </View>

        <View style={{ marginBottom: 16, zIndex: 10 }}>
          <View style={{ position: "relative", zIndex: 10 }}>
            {isDropdownOpen && (
              <View style={[styles.dropdownMenu, { bottom: buttonHeight + 8 }]}>
                <ScrollView
                  style={styles.dropdownScroll}
                  nestedScrollEnabled={true}
                  keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={true}
                >
                  {participantLoadings.initial && users.length === 0 ? (
                    <ActivityIndicator
                      size="small"
                      color={colors.white}
                      style={{ padding: 20 }}
                    />
                  ) : users.length === 0 ? (
                    <Text
                      style={{
                        color: colors.gray400,
                        padding: 12,
                        textAlign: "center",
                      }}
                    >
                      Nenhum usuário encontrado.
                    </Text>
                  ) : (
                    users.map((participant) => {
                      const isSelected = expense.participantIds.includes(
                        participant.id,
                      );
                      return (
                        <TouchableOpacity
                          key={`dropdown-${participant.id}`}
                          activeOpacity={0.6}
                          onPress={() => toggleParticipant(participant.id)}
                          style={styles.dropdownRow}
                        >
                          <View style={styles.avatar}>
                            <Text style={styles.avatarText}>
                              {getInitials(participant.name)}
                            </Text>
                          </View>
                          <Text style={styles.participantName}>
                            {participant.name}
                          </Text>
                          {isSelected ? (
                            <CheckCircleIcon
                              color={colors.greenBase}
                              size={20}
                            />
                          ) : (
                            <View style={{ width: 24, height: 24 }} />
                          )}
                        </TouchableOpacity>
                      );
                    })
                  )}
                </ScrollView>
              </View>
            )}

            <TouchableOpacity
              style={styles.participantsButton}
              onPress={() => setIsDropdownOpen(!isDropdownOpen)}
              activeOpacity={0.7}
              onLayout={(event: LayoutChangeEvent) => {
                const { height } = event.nativeEvent.layout;
                setButtonHeight(height);
              }}
            >
              <ParticipantsIcon color={colors.gray400} size={20} />
              <Text style={styles.participantsButtonText}>Participantes</Text>
            </TouchableOpacity>
          </View>

          {selectedParticipants.length > 0 && (
            <View style={styles.selectedList}>
              {selectedParticipants.map((participant) => (
                <View
                  key={`selected-${participant.id}`}
                  style={styles.participantRow}
                >
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {getInitials(participant.name)}
                    </Text>
                  </View>
                  <Text style={styles.participantName}>{participant.name}</Text>
                  <TouchableOpacity
                    onPress={() => handleRemoveParticipant(participant.id)}
                    hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
                  >
                    <TrashIcon color={colors.dangerLight} size={16} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.footer}>
          <Button onPress={() => handleSaveExpense()}>
            {loading ? <ActivityIndicator color={colors.white} /> : "Salvar"}
          </Button>
        </View>
      </View>
    </View>
  );
};
