// src/ui/searchBar.tsx
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputFake}>
        <Feather name="search" size={18} color="#8e8e93" />
        <Text style={styles.placeholder}>Search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: 6,
  },
  inputFake: {
    height: 36,
    borderRadius: 10,
    backgroundColor: "#f2f2f7",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  placeholder: {
    marginLeft: 6,
    color: "#8e8e93",
    fontSize: 16,
  },
});
