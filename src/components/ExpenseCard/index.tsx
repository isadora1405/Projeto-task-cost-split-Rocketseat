import { formatCurrency } from "@/shared/utils/formatCurrency";
import { colors } from "@/styles";
import { View, Text } from "react-native";
import { styles } from "./style";
import { getStatusStyle } from "@/shared/utils/getStatusStyle";
import { mapBackendStatus } from "@/shared/utils/mapBackendStatus";

export interface IExpenseProp {
  id: string;
  name: string;
  totalAmount: number;
  amountPerPerson: number;
  participants: {
    id: string;
    name: string;
    initials: string;
    paymentStatus?: string;
  }[];
  status: "Pago" | "Pendente" | "Parcial";
}

interface ExpenseCardProps {
  expense: IExpenseProp;
}

export function ExpenseCard({ expense }: ExpenseCardProps) {
  const statusStyle = getStatusStyle(mapBackendStatus(expense.status));

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.title} numberOfLines={1}>
          {expense.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.totalPrice}>
            {formatCurrency(expense.totalAmount)}
          </Text>
          <Text style={styles.perPersonPrice}>
            {formatCurrency(expense.amountPerPerson)} / pessoa
          </Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.avatarStack}>
          {expense.participants.slice(0, 5).map((participant, index) => (
            <View
              key={participant.id}
              style={[
                styles.avatar,
                { zIndex: 10 - index, marginLeft: index === 0 ? 0 : -8 },
              ]}
            >
              <Text style={styles.avatarText}>{participant.initials}</Text>
            </View>
          ))}
          {expense.participants.length > 5 && (
            <View style={[styles.avatar, { zIndex: 1, marginLeft: -8 }]}>
              <Text style={styles.avatarText}>
                +{expense.participants.length - 5}
              </Text>
            </View>
          )}
        </View>

        <View style={[styles.statusBadge, { backgroundColor: statusStyle.bg }]}>
          <Text style={[styles.statusText, { color: statusStyle.text }]}>
            {mapBackendStatus(expense.status)}
          </Text>
        </View>
      </View>
    </View>
  );
}
