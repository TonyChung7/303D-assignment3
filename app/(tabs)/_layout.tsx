import useThemeColor from "@/src/constants/useThemeColor";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  const { background } = useThemeColor();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { paddingTop: 8, backgroundColor: background },

        tabBarActiveTintColor: "#2d90d6", // selected color
        tabBarInactiveTintColor: "#8e8e93", // unselected color
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Octicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
