import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Activities } from "@/screens/Activities";
import { Summary } from "@/screens/Summary";
import { ActivityDetails } from "@/screens/ActivityDetails";

import { ParticipantsScreen } from "@/screens/ParticipantsScreen";
import { colors, fontFamily } from "@/styles";
import {
  ActivitiesIcon,
  ActivitiesSolidIcon,
  ParticipantsIcon,
  ParticipantsSolidIcon,
  PieChartIcon,
  PieChartSolidIcon,
} from "@/components/Icons";

export type ActivitiesStackParamList = {
  activitiesList: undefined;
  activityDetails: {
    activityId: string;
    title: string;
    date: string;
  };
};

export type PrivateStackParamList = {
  MainTabs: undefined;
};

const PrivateStack = createStackNavigator<PrivateStackParamList>();
const ActivitiesStack = createStackNavigator<ActivitiesStackParamList>();
const Tab = createBottomTabNavigator();

const ActivitiesRoutes = () => {
  return (
    <ActivitiesStack.Navigator screenOptions={{ headerShown: false }}>
      <ActivitiesStack.Screen name="activitiesList" component={Activities} />
      <ActivitiesStack.Screen
        name="activityDetails"
        component={ActivityDetails}
      />
    </ActivitiesStack.Navigator>
  );
};

const TabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Atividades"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray700,
          borderTopColor: colors.gray800,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 5,
          paddingTop: 5,
          height: 60 + insets.bottom,
        },
        tabBarActiveTintColor: colors.greenBase,
        tabBarInactiveTintColor: colors.gray400,
      }}
    >
      <Tab.Screen
        name="Atividades"
        component={ActivitiesRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <ActivitiesSolidIcon color={color} size={size} />
            ) : (
              <ActivitiesIcon color={color} size={size} />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                fontFamily: focused ? fontFamily.semiBold : fontFamily.regular,
                color: focused ? colors.gray200 : colors.gray400,
                marginBottom: 4,
              }}
            >
              Atividades
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Resumo"
        component={Summary}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <PieChartSolidIcon color={color} size={size} />
            ) : (
              <PieChartIcon color={color} size={size} />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                fontFamily: focused ? fontFamily.semiBold : fontFamily.regular,
                color: focused ? colors.gray200 : colors.gray400,
                marginBottom: 4,
              }}
            >
              Resumo
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="Participantes"
        component={ParticipantsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return focused ? (
              <ParticipantsSolidIcon color={color} size={size} />
            ) : (
              <ParticipantsIcon color={color} size={size} />
            );
          },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 14,
                fontFamily: focused ? fontFamily.semiBold : fontFamily.regular,
                color: focused ? colors.gray200 : colors.gray400,
                marginBottom: 4,
              }}
            >
              Participantes
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const PrivateRoutes = () => {
  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
      <PrivateStack.Screen name="MainTabs" component={TabNavigator} />
    </PrivateStack.Navigator>
  );
};
