import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomePostCardList from "@/src/ui/homeSection/homePostCardList";
import StoryCardList from "@/src/ui/homeSection/storyCardList";

function HeaderBar() {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.headerBtn}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Octicons name="plus" size={22} color="#111" />
      </TouchableOpacity>

      <Text style={styles.brand}>Instagram</Text>

      <View style={styles.headerRight}>
        <TouchableOpacity
          style={styles.headerBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Octicons name="heart" size={22} color="#111" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <HeaderBar />
      <HomePostCardList
        ListHeaderComponent={<StoryCardList />}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e6e6e6",
    backgroundColor: "#fff",
  },
  headerBtn: { padding: 6 },
  brand: { fontSize: 24, fontWeight: "700" },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 8 },
});
