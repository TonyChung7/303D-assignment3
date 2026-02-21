import React from "react";
import { FlatList, ViewStyle } from "react-native";
import HomePostCard, { HomeMeta, HomeUser } from "./homePostCard";

// Import data and types within the List component
import { HOME_POSTS } from "@/src/data/homepost.data";
import { STORIES } from "@/src/data/stories.data";
import type { HomePost } from "@/src/types/homepost";

// Optional: Let the external Header component be passed in, but no data is passed (only the UI combination)
type Props = {
  ListHeaderComponent?: React.ReactElement | null;
  contentContainerStyle?: ViewStyle;
  showsVerticalScrollIndicator?: boolean;
};
// Derive the display user for each Post from STORIES (internal processing)
const FALLBACK_AVATAR =
  STORIES[0]?.avatar ?? require("@/assets/images/avatar.jpg");

const USER_BY_POST: Record<string, HomeUser> = Object.fromEntries(
  HOME_POSTS.map((p, idx) => {
    const s = STORIES[idx % STORIES.length];
    return [
      p.id,
      {
        name: s?.label ?? "user",
        avatar: s?.avatar ?? FALLBACK_AVATAR,
      },
    ];
  }),
);

// (Optional) Counting. If you don't want to display numbers, just clear the object.
const META_BY_POST: Record<string, HomeMeta> = {
  p01: { likes: 1200, comments: 57, reposts: 24, sends: 6 },
  p02: { likes: 980, comments: 12, reposts: 5, sends: 1 },
  p03: { likes: 342, comments: 8, reposts: 2, sends: 0 },
};

export default function HomePostCardList({
  ListHeaderComponent,
  contentContainerStyle,
  showsVerticalScrollIndicator = false,
}: Props) {
  return (
    <FlatList<HomePost>
      data={HOME_POSTS}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      ListHeaderComponent={ListHeaderComponent ?? null}
      contentContainerStyle={contentContainerStyle}
      renderItem={({ item }) => (
        <HomePostCard
          post={item}
          user={USER_BY_POST[item.id]}
          meta={META_BY_POST[item.id]}
        />
      )}
    />
  );
}
