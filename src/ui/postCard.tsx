import { router } from "expo-router";
import { Image, Pressable, StyleSheet } from "react-native";
import { Post } from "../types/post";

export default function postCard(post: Post) {
  return (
    <Pressable
      onPress={() => router.push(`/post/${post.id}` as any)}
      style={styles.cardContainer}
    >
      <Image
        source={post.postImage}
        style={styles.postImage}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    aspectRatio: 4 / 5,
    maxWidth: "33.33%",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});
