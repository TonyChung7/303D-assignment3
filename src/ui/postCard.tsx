import { router } from "expo-router";
import { Dimensions, Image, Pressable, StyleSheet } from "react-native";
import { Post } from "../types/post";

const screenWidth = Dimensions.get("window").width;
const postImageSize = screenWidth / 3;
export default function postCard(post: Post) {
  return (
    <Pressable onPress={() => router.push(`/${post.id}`)}>
      <Image
        source={post.postImage}
        style={styles.postImage}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  postImage: {
    width: postImageSize,
    height: undefined,
    aspectRatio: 4 / 5,
  },
});
