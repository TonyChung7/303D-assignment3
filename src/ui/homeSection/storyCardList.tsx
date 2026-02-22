import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import StoryCard from "./storyCard";

// Import data and types within the List component
import { STORIES } from "@/src/data/stories.data";

type Props = {
  ringColor?: string; // options: outer ring color for non-"your story" cards
};

export default function StoryCardList({ ringColor }: Props) {
  return (
    <View style={styles.wrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {STORIES.map((s) => (
          <TouchableOpacity
            key={s.id}
            activeOpacity={0.8}
            style={{ marginRight: 14 }}
          >
            <StoryCard story={s} ringColor={ringColor} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e6e6e6",
    backgroundColor: "#fff",
  },
});
