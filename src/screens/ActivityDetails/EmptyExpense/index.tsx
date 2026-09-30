import { View, Text } from "react-native";
import { Button } from "@/components/Button";
import { styles } from "../style";
import { useBottomSheetContext } from "@/context/bottomsheet.context";
import { CreateExpenseSheet } from "../CreateExpenseForm";
import { colors } from "@/styles";
import { PieChartIcon, PlusIcon } from "@/components/Icons";

export function EmptyExpenses() {
  const { openBottomSheet } = useBottomSheetContext();

  const handleNewExpense = () => {
    openBottomSheet(<CreateExpenseSheet />, 0);
  };

  return (
    <View style={styles.emptyContainer}>
      <PieChartIcon size={24} color={colors.gray400} />

      <Text style={styles.text}>
        Para começar a dividir, registre uma despesa
      </Text>

      <Button
        variant="primary"
        icon={<PlusIcon size={24} color={colors.gray800} />}
        onPress={handleNewExpense}
        style={styles.button}
      >
        Nova despesa
      </Button>
    </View>
  );
}
