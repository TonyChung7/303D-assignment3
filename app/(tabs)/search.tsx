// app/(tabs)/search.tsx
import SearchGridList from "@/src/ui/searchSection/searchGridList";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={{ flex: 1 }}>
        <SearchGridList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
});
