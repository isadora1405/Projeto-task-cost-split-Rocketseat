import React, { useCallback } from "react";
import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { EmptySummary } from "./EmptySummary";
import { SummaryContent } from "./SummaryContent";
import { useStatisticsContext } from "@/context/statistics.context";
import { styles } from "./style";

const LogoImage = require("../../../assets/images/Logo.png");

export function Summary(): React.JSX.Element {
  const { statistics, loadingStatistics, fetchStatistics } =
    useStatisticsContext();

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [fetchStatistics]),
  );

  const hasActivities = statistics ? statistics.activitiesCount > 0 : false;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoIcon}
              source={LogoImage}
              resizeMode="cover"
            />
            <Text style={styles.logoText}>
              <Text style={styles.logoTextHighlight}>TaskCost</Text>
              <Text style={styles.logoTextNormal}> Split</Text>
            </Text>
          </View>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Resumo</Text>
          <Text style={styles.subtitle}>
            Acompanhe as informações principais sobre suas atividades
          </Text>
        </View>

        {loadingStatistics && !statistics ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#30a65d" />
          </View>
        ) : hasActivities && statistics ? (
          <SummaryContent stats={statistics} />
        ) : (
          <EmptySummary />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
