// src/types/homepost.ts
import type { ImageSourcePropType } from "react-native";

export type HomePost = {
  id: string;
  image: ImageSourcePropType;
  caption?: string;
  time: string; // ISO 或 yyyy-MM-dd
};
