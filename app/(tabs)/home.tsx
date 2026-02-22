import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useThemeColor from "@/src/constants/useThemeColor";
import HomePostCardList from "@/src/ui/homeSection/homePostCardList";
import StoryCardList from "@/src/ui/homeSection/storyCardList";

function HeaderBar() {
  const { background, text, tabIconDefault } = useThemeColor();
  return (
    <View style={[styles.header, { backgroundColor: background }]}>
      <TouchableOpacity
        style={styles.headerBtn}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Octicons name="plus" size={22} color={tabIconDefault} />
      </TouchableOpacity>

      <Text style={[styles.brand, { color: text }]}>Instagram</Text>

      <View style={styles.headerRight}>
        <TouchableOpacity
          style={styles.headerBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Octicons name="heart" size={22} color={tabIconDefault} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  const { background } = useThemeColor();
  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: background }]}
      edges={["top"]}
    >
      <HeaderBar />
      <HomePostCardList
        ListHeaderComponent={<StoryCardList />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e6e6e6",
  },
  headerBtn: { padding: 6 },
  brand: { fontSize: 24, fontWeight: "700" },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 8 },
});
