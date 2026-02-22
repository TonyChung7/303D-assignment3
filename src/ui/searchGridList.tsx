// src/ui/searchGridList.tsx
import React from "react";
import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";
import SearchBar from "./searchBar";
import SearchGridTile from "./searchGridTile";

// Import data inside the list component
import { SEARCH_TILES } from "@/src/data/search.data";
import type { SearchTile } from "@/src/types/search";

const GAP = 1; // Gap between grid items (close to the reference layout)

export default function SearchGridList() {
  const { width } = useWindowDimensions();
  const tileSize = Math.floor((width - GAP * 2) / 3); // 3 columns & two gaps

  return (
    <FlatList<SearchTile>
      data={SEARCH_TILES}
      keyExtractor={(item) => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<SearchBar />}
      columnWrapperStyle={{ gap: GAP }}
      contentContainerStyle={{ paddingBottom: 12 }}
      renderItem={({ item }) => <SearchGridTile tile={item} size={tileSize} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  separator: { height: GAP },
});
