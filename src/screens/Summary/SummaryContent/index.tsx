import { View, Text } from "react-native";
import { styles } from "./style";
import { IStatisticsResponse } from "@/shared/interfaces/user-interface";
import { colors } from "@/styles";
import {
  ActivitiesIcon,
  CheckIcon,
  ExpensesIcon,
  ParticipantsIcon,
  PieChartIcon,
  WarningOctagonIcon,
} from "@/components/Icons";
import { formatCurrency } from "@/shared/utils/formatCurrency";

interface SummaryContentProps {
  stats: IStatisticsResponse;
}

export function SummaryContent({ stats }: SummaryContentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Minhas contas</Text>
        <View style={styles.card}>
          <View
            style={[styles.iconBox, { backgroundColor: colors.successLow }]}
          >
            <CheckIcon size={16} color={colors.successLight} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.currencyText}>
              <Text style={styles.currencySymbol}>R$ </Text>
              {formatCurrency(stats.amountPaidInCents, true)}
            </Text>
            <Text style={styles.cardSubtitle}>
              <Text style={styles.subtitleMuted}>Pago em </Text>
              <Text style={styles.subtitleBold}>
                {stats.paidExpensesCount} despesa
                {stats.paidExpensesCount !== 1 && "s"}
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: colors.dangerLow }]}>
            <WarningOctagonIcon size={16} color={colors.dangerLight} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.currencyText}>
              <Text style={styles.currencySymbol}>R$ </Text>
              {formatCurrency(stats.amountToPayInCents, true)}
            </Text>
            <Text style={styles.cardSubtitle}>
              <Text style={styles.subtitleMuted}>Pendente em </Text>
              <Text style={styles.subtitleBold}>
                {stats.expensesToPayCount} despesa
                {stats.expensesToPayCount !== 1 && "s"}
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações gerais</Text>

        <View style={styles.card}>
          <View style={[styles.iconBox, { backgroundColor: colors.gray700 }]}>
            <PieChartIcon size={16} color={colors.greenLight} />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.currencyText}>
              <Text style={styles.currencySymbol}>R$ </Text>
              {formatCurrency(stats.totalExpensesAmountInCents, true)}
            </Text>
            <Text style={styles.subtitleMuted}>Total de despesas</Text>
          </View>
        </View>

        <View style={styles.miniCardsRow}>
          <View style={styles.miniCard}>
            <Text style={styles.miniCardValue}>{stats.activitiesCount}</Text>
            <Text style={styles.miniCardLabel}>Atividades</Text>
            <View style={styles.miniCardIcon}>
              <ActivitiesIcon size={16} color={colors.greenLight} />
            </View>
          </View>

          <View style={styles.miniCard}>
            <Text style={styles.miniCardValue}>{stats.expensesCount}</Text>
            <Text style={styles.miniCardLabel}>Despesas</Text>
            <View style={styles.miniCardIcon}>
              <ExpensesIcon size={16} color={colors.greenLight} />
            </View>
          </View>

          <View style={styles.miniCard}>
            <Text style={styles.miniCardValue}>
              {stats.uniqueParticipantsCount}
            </Text>
            <Text style={styles.miniCardLabel}>Participantes</Text>
            <View style={styles.miniCardIcon}>
              <ParticipantsIcon size={16} color={colors.greenLight} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
