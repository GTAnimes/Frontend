import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#002E72",
        },
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Home",
          headerTintColor: "white",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#0462EF" : "white"}
              />
            );
          },
          headerStyle: {
            backgroundColor: "#002E72",
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboards",
          headerTitle: "Leaderboards",
          headerTintColor: "white",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="podium"
                size={24}
                color={focused ? "#0462EF" : "white"}
              />
            );
          },
          headerStyle: {
            backgroundColor: "#002E72",
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitle: "Profile",
          headerTintColor: "white",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "#0462EF" : "white"}
              />
            );
          },
          headerStyle: {
            backgroundColor: "#002E72",
            shadowColor: "transparent",
            elevation: 0,
          },
        }}
      />
    </Tabs>
  );
}
