import type { StoryItem } from "@/src/types/story";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  story: StoryItem;
  ringColor?: string;
};

export default function StoryCard({ story, ringColor = "#ee2a7b" }: Props) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.ring,
          { borderColor: story.isYou ? "#d1d1d6" : ringColor },
        ]}
      >
        <View style={styles.inner}>
          <Image
            source={story.avatar as ImageSourcePropType}
            style={styles.avatar}
          />
          {story.isYou && (
            <View style={styles.addBadge}>
              <Octicons name="plus" size={12} color="#fff" />
            </View>
          )}
        </View>
      </View>
      <Text numberOfLines={1} style={styles.label}>
        {story.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: 74, alignItems: "center" },
  ring: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  inner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: { width: 56, height: 56, borderRadius: 28 },
  addBadge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#007aff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  label: { marginTop: 6, fontSize: 11, color: "#111", maxWidth: 70 },
});
