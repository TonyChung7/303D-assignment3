// src/types/story.ts
import type { ImageSourcePropType } from "react-native";

export type StoryItem = {
  id: string;
  label: string;
  avatar: ImageSourcePropType;
  isYou?: boolean;
};
