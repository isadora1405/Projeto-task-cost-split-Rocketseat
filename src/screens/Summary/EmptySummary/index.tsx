import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "@/components/Button";
import { styles } from "../style";
import { colors } from "@/styles";
import { PieChartIcon, PlusIcon } from "@/components/Icons";

export function EmptySummary() {
  return (
    <View style={styles.emptyStateContainer}>
      <PieChartIcon size={24} color={colors.gray400} />

      <Text style={styles.emptyStateText}>
        Para começar a acompanhar, crie uma atividade
      </Text>

      <Button
        variant="primary"
        icon={<PlusIcon size={24} color={colors.gray800} />}
        style={styles.button}
      >
        Criar atividade
      </Button>
    </View>
  );
}
