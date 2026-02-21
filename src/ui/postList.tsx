import { FlatList } from "react-native";
import { posts } from "../data/posts";
import postCard from "./postCard";
import ProfileHeaderSection from "./profileHeaderSection";

export default function PostList() {
  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.postTime).getTime() - new Date(a.postTime).getTime();
  });

  return (
    <FlatList
      data={sortedPosts}
      numColumns={3}
      columnWrapperStyle={{ gap: 1 }}
      contentContainerStyle={{ gap: 1 }}
      ListHeaderComponent={ProfileHeaderSection}
      renderItem={({ item }) => postCard(item)}
      keyExtractor={(item) => item.id}
    />
  );
}
