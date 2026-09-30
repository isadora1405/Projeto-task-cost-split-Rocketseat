import { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { styles } from "./styles";
import { useActivityContext } from "@/context/activity.context";
import * as activityService from "@/shared/services/activities.service";
import { createActivitySchema, NewActivityFormData } from "./schema";
import { format, parseISO } from "date-fns";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { CalendarIcon, CloseIcon, TrashIcon } from "../Icons";
import { colors } from "@/styles";

interface ActivityData {
  id: string;
  title: string;
  date: string;
}

interface ActivityModalProps {
  visible: boolean;
  onClose: () => void;
  activityToEdit?: ActivityData;
  onDelete?: (id: string) => void;
}

export function CreateActivityModal({
  visible,
  onClose,
  activityToEdit,
  onDelete,
}: ActivityModalProps) {
  const { handleCreateActivity, refreshActivities } = useActivityContext();
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isEditMode = !!activityToEdit;

  const { control, handleSubmit, reset, setValue, watch } =
    useForm<NewActivityFormData>({
      resolver: yupResolver(createActivitySchema),
      defaultValues: { title: "", date: "" },
    });

  const currentDateValue = watch("date");

  useEffect(() => {
    if (visible) {
      if (activityToEdit) {
        let formattedDate = activityToEdit.date;
        console.log(formattedDate);

        if (formattedDate && !formattedDate.includes("/")) {
          try {
            const parsedDate = parseISO(formattedDate);

            formattedDate = format(parsedDate, "dd/MM/yyyy");
          } catch (error) {
            console.log("Erro ao formatar data de edição:", error);
          }
        }

        reset({ title: activityToEdit.title, date: formattedDate });
      } else {
        reset({ title: "", date: "" });
      }
    }
  }, [visible, activityToEdit, reset]);

  const handleConfirm = (selectedDate: Date) => {
    const formattedDate = selectedDate.toLocaleDateString("pt-BR");

    setValue("date", formattedDate, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setShowDatePicker(false);
  };

  const handleCancel = () => {
    setShowDatePicker(false);
  };

  const getSelectedDate = () => {
    if (!currentDateValue) {
      return new Date();
    }
    const [day, month, year] = currentDateValue.split("/");

    if (day && month && year) {
      return new Date(Number(year), Number(month) - 1, Number(day));
    }

    return new Date();
  };

  const onSubmit = async (data: NewActivityFormData) => {
    setIsLoading(true);
    try {
      const isoDate = new Date().toISOString();

      if (isEditMode && activityToEdit) {
        await activityService.updateActivity(activityToEdit.id, {
          title: data.title,
          activityDate: isoDate,
        });
        await refreshActivities();
      } else {
        await handleCreateActivity({
          title: data.title,
          activityDate: isoDate,
        });
      }

      reset();
      onClose();
    } catch (error) {
      if (isEditMode && activityToEdit) {
        handleError(error, "Falha ao editar atividade.");
      } else {
        handleError(error, "Falha ao criar atividade.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = async () => {
    if (!activityToEdit) return;

    setIsLoading(true);
    try {
      await activityService.deleteActivity(activityToEdit.id);
      await refreshActivities();

      if (onDelete) onDelete(activityToEdit.id);

      handleClose();
    } catch (error) {
      handleError(error, "Falha ao deletar atividade");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={[styles.overlay, { backgroundColor: "rgba(0,0,0,0.2)" }]}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {isEditMode ? "Editar atividade" : "Nova atividade"}
            </Text>
            <TouchableOpacity
              onPress={handleClose}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <CloseIcon size={16} color={colors.gray300} />
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer}>
            <Input
              control={control}
              name="title"
              placeholder="Título"
              autoCapitalize="sentences"
            />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setShowDatePicker(true)}
            >
              <View pointerEvents="none">
                <Input
                  control={control}
                  name="date"
                  placeholder="Data"
                  icon={CalendarIcon}
                  editable={false}
                />
              </View>
            </TouchableOpacity>

            <DateTimePicker
              isVisible={showDatePicker}
              date={getSelectedDate()}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={handleCancel}
              locale="pt_BR"
            />
          </View>

          <View style={styles.footer}>
            {isEditMode && onDelete && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleDeleteClick}
                style={styles.deleteButton}
              >
                <TrashIcon size={24} color={colors.dangerLight} />
              </TouchableOpacity>
            )}

            <View
              style={[
                styles.saveButtonContainer,
                !isEditMode && { width: "100%" },
              ]}
            >
              <Button
                variant="primary"
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color={colors.gray800} />
                ) : (
                  "Salvar"
                )}
              </Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
