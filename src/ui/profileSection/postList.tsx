import { posts } from "@/src/data/posts";
import { FlatList } from "react-native";
import postCard from "./postCard";
import ProfileHeaderSection from "./profileHeader";

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
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ProfileHeaderSection}
      renderItem={({ item }) => postCard(item)}
      keyExtractor={(item) => item.id}
    />
  );
}
