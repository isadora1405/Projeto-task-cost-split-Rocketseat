import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { styles } from "../style";
import { colors } from "@/styles";
import { ActivitiesIcon } from "@/components/Icons";

export function EmptyList() {
  return (
    <View style={styles.emptyStateContainer}>
      <ActivitiesIcon size={24} color={colors.gray400} />
      <Text style={styles.emptyStateText}>
        Você ainda não tem atividades criadas
      </Text>
    </View>
  );
}
