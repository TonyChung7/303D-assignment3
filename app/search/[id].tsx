import Feather from "@expo/vector-icons/Feather";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Use the same data source as the grid list
import { SEARCH_TILES } from "@/src/data/search.data";
import type { SearchTile } from "@/src/types/search";

const { width, height } = Dimensions.get("window");

export default function SearchDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const item: SearchTile | undefined = SEARCH_TILES.find((t) => t.id === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar hidden animated barStyle="dark-content" />
        <View style={styles.center}>
          <Text style={styles.notFound}>Content not found</Text>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backBtnText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar hidden animated barStyle="light-content" />

      {/* Top overlay header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerIconBtn}
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel="Back"
        >
          <Feather name="chevron-left" size={26} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          {/* Optional share or more actions, placeholders for now */}
          <TouchableOpacity
            style={styles.headerIconBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            accessibilityRole="button"
            accessibilityLabel="More"
          >
            <Feather name="more-horizontal" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Full-bleed media */}
      <View style={styles.mediaWrap}>
        <Image
          source={item.image as ImageSourcePropType}
          style={styles.media}
          resizeMode="contain" // show full image; switch to "cover" if you want edge-to-edge crop
        />
      </View>

      {/* Bottom info bar (views or badge text) */}
      <View style={styles.bottomBar}>
        <View style={styles.metaLeft}>
          {typeof item.views === "number" ? (
            <View style={styles.badge}>
              <Feather
                name="play"
                size={14}
                color="#fff"
                style={{ marginRight: 4 }}
              />
              <Text style={styles.badgeText}>
                {Intl.NumberFormat(undefined, { notation: "compact" }).format(
                  item.views,
                )}
              </Text>
            </View>
          ) : !!item.badgeText ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.badgeText}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000", // immersive black background
  },

  header: {
    left: 0,
    right: 0,
    height: 52,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    backgroundColor: "rgba(0,0,0,0.25)", // subtle overlay for contrast
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  mediaWrap: {
    flex: 1,
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    width: "100%",
    height: "100%",
  },

  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.25)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  metaLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.45)",
    flexDirection: "row",
    alignItems: "center",
  },
  badgeText: { color: "#fff", fontSize: 12, fontWeight: "600" },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  notFound: {
    color: "#111",
    fontSize: 16,
    fontWeight: "600",
  },
  backBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "#111",
    borderRadius: 8,
  },
  backBtnText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});
