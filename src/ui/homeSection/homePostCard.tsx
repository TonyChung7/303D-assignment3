import type { HomePost } from "@/src/types/homepost";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import React, { useMemo } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type HomeUser = {
  name: string;
  avatar: ImageSourcePropType;
  location?: string;
};

export type HomeMeta = {
  likes?: number;
  comments?: number;
  reposts?: number;
  sends?: number;
};

const { width } = Dimensions.get("window");

type Props = {
  post: HomePost;
  user: HomeUser;
  meta?: HomeMeta;
};

export default function HomePostCard({ post, user, meta }: Props) {
  const imageHeight = useMemo(() => Math.round(width * 1.05), []);
  const showCounts =
    typeof meta?.likes === "number" ||
    typeof meta?.comments === "number" ||
    typeof meta?.reposts === "number" ||
    typeof meta?.sends === "number";

  return (
    <View style={styles.card}>
      {/* Top: Avatar/Username/More */}
      <View style={styles.cardHeader}>
        <View style={styles.cardHeaderLeft}>
          <Image source={user.avatar} style={styles.cardAvatar} />
          <View>
            <Text style={styles.cardUser}>{user.name}</Text>
            {!!user.location && (
              <Text style={styles.cardSubtle}>{user.location}</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name="more-horizontal" size={20} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Main image (local) */}
      <Image
        source={post.image}
        style={[styles.cardImage, { height: imageHeight }]}
        resizeMode="cover"
      />

      {/* Icon row */}
      <View style={styles.actionsRowSingle}>
        <View style={styles.actionsLeftRow}>
          <TouchableOpacity
            style={styles.iconWithText}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <FontAwesome name="heart-o" size={20} color="#111" />
            {showCounts && (
              <Text style={styles.iconCount}>{format(meta?.likes)}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconWithText}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Octicons name="comment" size={20} color="#111" />
            {showCounts && (
              <Text style={styles.iconCount}>{format(meta?.comments)}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconWithText}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Octicons name="sync" size={20} color="#111" />
            {showCounts && (
              <Text style={styles.iconCount}>{format(meta?.reposts)}</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconWithText}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Feather name="send" size={20} color="#111" />
            {showCounts && (
              <Text style={styles.iconCount}>{format(meta?.sends)}</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.iconBtnRight}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Octicons name="bookmark" size={22} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Text block: Copy + relative time */}
      <View style={styles.textBlock}>
        {!!post.caption && (
          <Text style={styles.captionText}>
            <Text style={styles.boldText}>{user.name} </Text>
            {post.caption}
          </Text>
        )}
        <Text style={styles.mutedMeta}>{timeAgo(post.time)}</Text>
      </View>
    </View>
  );
}

function format(n?: number) {
  if (typeof n !== "number") return "";
  return Intl.NumberFormat(undefined, { notation: "compact" }).format(n);
}
function timeAgo(dateStr: string) {
  const d = new Date(dateStr);
  const diffMs = Date.now() - d.getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(months / 12);
  return `${years}y ago`;
}

const styles = StyleSheet.create({
  card: {
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e6e6e6",
    backgroundColor: "#fff",
  },
  cardHeader: {
    height: 56,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardHeaderLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  cardAvatar: { width: 34, height: 34, borderRadius: 17 },
  cardUser: { fontSize: 14, fontWeight: "600", color: "#111" },
  cardSubtle: { fontSize: 12, color: "#6b7280" },
  cardImage: { width: "100%", backgroundColor: "#f2f2f2" },

  // Icon row
  actionsRowSingle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  actionsLeftRow: { flexDirection: "row", alignItems: "center", gap: 18 },
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 2,
  },
  iconCount: { fontSize: 13.5, color: "#111" },
  iconBtnRight: { paddingHorizontal: 4, paddingVertical: 2 },

  // Text block
  textBlock: { paddingHorizontal: 12, paddingTop: 6, gap: 6 },
  captionText: { fontSize: 13.5, color: "#111" },
  boldText: { fontWeight: "700" },
  mutedMeta: { fontSize: 12, color: "#6b7280" },
});
