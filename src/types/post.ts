import { ImageSourcePropType } from "react-native";

export interface Post {
  id: string;
  postImage: ImageSourcePropType;
  content?: string;
  postTime: string;
}
