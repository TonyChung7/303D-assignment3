// src/types/search.ts
import type { ImageSourcePropType } from "react-native";

export type SearchTile = {
  id: string;
  image: ImageSourcePropType;
  /** Views shown at the bottom-left corner (optional) */
  views?: number;
  /** If no views, you can show a text badge instead (e.g., "bubble tea") */
  badgeText?: string;
};
