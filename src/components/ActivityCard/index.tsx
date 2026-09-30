import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Activity } from "@/shared/interfaces/http/activity-interface";
import { colors } from "@/styles";
import { CalendarIcon, ExpensesIcon, ParticipantsIcon } from "../Icons";
import { formatCurrency } from "@/shared/utils/formatCurrency";
import { format } from "date-fns";

interface ActivityCardProps {
  activity: Activity;
  onPress: () => void;
}

export function ActivityCard({ activity, onPress }: ActivityCardProps) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.headerRow}>
        <Text style={styles.title} numberOfLines={1}>
          {activity.name}
        </Text>
        <Text style={styles.amount} numberOfLines={1}>
          {formatCurrency(activity.totalAmountInCents, true)}
        </Text>
      </View>

      <View style={styles.divider}>
        <View style={styles.badge}>
          <CalendarIcon size={16} color={colors.gray400} />
          <Text style={styles.badgeText}>
            {format(activity.activityDate, "dd/MM/yyyy")}
          </Text>
        </View>

        <View style={styles.badge}>
          <ParticipantsIcon size={16} color={colors.gray400} />
          <Text style={styles.badgeText}>
            {activity.participantsAmount || 0} pessoas
          </Text>
        </View>

        <View style={styles.badge}>
          <ExpensesIcon size={16} color={colors.gray400} />
          <Text style={styles.badgeText}>
            {activity.expensesAmount || 0} despesas
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
