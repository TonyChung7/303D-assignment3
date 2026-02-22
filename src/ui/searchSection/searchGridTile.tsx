// src/ui/SearchGridTile.tsx
import type { SearchTile } from "@/src/types/search";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";

type Props = {
  tile: SearchTile;
  size?: number; // Optional size prop for flexibility, but we can also rely on styles
};
export default function SearchGridTile({ tile, size }: Props) {
  return (
    <Pressable
      onPress={() => router.push(`/search/${tile.id}` as any)}
      style={[styles.cardContainer, { width: size, height: size }]}
    >
      <Image source={tile.image} style={styles.postImage} resizeMode="cover" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    aspectRatio: 4 / 5, // square grid cell
    maxWidth: "33.33%", // 3 columns like your profile layout
    backgroundColor: "#000", // avoids tiny gaps on high density screens
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});
