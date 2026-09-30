import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "../style";
import { colors } from "@/styles";
import { CalendarIcon, PencilIcon } from "@/components/Icons";
import { formatCurrency } from "@/shared/utils/formatCurrency";
import { getInitials } from "@/shared/utils/getInitials";

interface IHeaderParticipant {
  id: string;
  name: string;
}

interface DetailsHeaderProps {
  title: string;
  date: string;
  participants: IHeaderParticipant[];
  totalAmountInCents: number;
  hasExpenses: boolean;
  onBack: () => void;
  onEdit: () => void;
}

export function DetailsHeader({
  title,
  date,
  participants,
  totalAmountInCents,
  hasExpenses,
  onBack,
  onEdit,
}: DetailsHeaderProps) {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
          <Text style={styles.backText}>{"<- Voltar"}</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.dateContainer}>
            <CalendarIcon size={16} color={colors.gray300} />
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.editButton}
          onPress={onEdit}
          activeOpacity={0.7}
        >
          <PencilIcon size={24} color={colors.gray300} />
        </TouchableOpacity>
      </View>

      {hasExpenses && (
        <View style={styles.summaryContainer}>
          <View style={styles.summaryLeft}>
            <View style={styles.totalAvatarStack}>
              {participants.length === 0 ? (
                <View style={styles.totalAvatar}>
                  <Text style={styles.totalAvatarText}>-</Text>
                </View>
              ) : (
                participants.slice(0, 5).map((p, i) => (
                  <View
                    key={p.id}
                    style={[
                      styles.totalAvatar,
                      { zIndex: 10 - i, marginLeft: i === 0 ? 0 : -6 },
                    ]}
                  >
                    <Text style={styles.totalAvatarText}>
                      {getInitials(p.name)}
                    </Text>
                  </View>
                ))
              )}

              {participants.length > 5 && (
                <View
                  style={[styles.totalAvatar, { zIndex: 1, marginLeft: -6 }]}
                >
                  <Text style={styles.totalAvatarText}>
                    +{participants.length - 5}
                  </Text>
                </View>
              )}
            </View>
            <Text style={styles.summaryText}>
              {participants.length} participante
              {participants.length !== 1 && "s"}
            </Text>
          </View>

          <View style={styles.summaryRight}>
            <Text style={styles.totalAmountText}>
              {formatCurrency(totalAmountInCents, true)}
            </Text>
            <Text style={styles.summaryText}>Gastos totais</Text>
          </View>
        </View>
      )}
    </View>
  );
}
