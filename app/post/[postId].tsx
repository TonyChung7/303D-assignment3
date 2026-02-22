import useThemeColor from "@/src/constants/useThemeColor";
import { posts } from "@/src/data/posts";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Post() {
  const router = useRouter();
  const { text, tabIconDefault, background } = useThemeColor();
  const { postId } = useLocalSearchParams();
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={{ color: text }}>Post not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: background }]}>
      {/* Top Header */}
      <View style={[styles.header, { backgroundColor: background }]}>
        <TouchableOpacity
          style={styles.headerIconBtn}
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="chevron-back" size={24} color={tabIconDefault} />
        </TouchableOpacity>

        <View style={styles.headerTitleWrap} pointerEvents="none">
          <Text style={[styles.headerSmall, { color: text }]}>
            frenchie_fry39
          </Text>
          <Text style={[styles.headerTitle, { color: text }]}>Posts</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.userRow}>
          <View style={styles.userInfo}>
            <Image
              source={require("@/assets/images/avatar.jpg")}
              style={styles.avatar}
            />
            <View>
              <Text style={[styles.username, { color: text }]}>
                frenchie_fry39
              </Text>
              <Text style={styles.subText}>via frenchie_fry39</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.settingBtn}>
            <MaterialIcons name="more-horiz" size={24} color={tabIconDefault} />
          </TouchableOpacity>
        </View>
        <Image
          source={post.postImage}
          style={styles.postImage}
          resizeMode="cover"
        />
        <View style={styles.iconRow}>
          <View style={styles.leftIconsGroup}>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons name="heart-outline" size={26} color={tabIconDefault} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="chatbubble-outline"
                size={24}
                color={tabIconDefault}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="paper-plane-outline"
                size={24}
                color={tabIconDefault}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.iconBtn}>
              <Ionicons
                name="bookmark-outline"
                size={24}
                color={tabIconDefault}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.contentSection}>
          <View style={styles.likesRow}>
            <Image
              source={require("@/assets/images/avatar.jpg")}
              style={styles.avatarlikes}
            />
            <Image
              source={require("@/assets/images/post02.jpg")}
              style={styles.avatarlikes}
            />
            <Image
              source={require("@/assets/images/post03.jpg")}
              style={styles.avatarlikes}
            />
            <Text style={[styles.likestext, { color: text }]}>
              Liked by
              <Text style={{ fontWeight: "bold", color: text }}>
                {" "}
                paisley.print.48{" "}
              </Text>
              and
              <Text style={{ fontWeight: "bold", color: text }}>
                {" "}
                7 others{" "}
              </Text>
            </Text>
          </View>
          <View style={styles.userPost}>
            <Text style={[styles.contentText, { color: text }]}>
              <Text style={[styles.username, { color: text }]}>
                frenchie_fry39{" "}
              </Text>
              {post.content}
            </Text>
          </View>
          <Text style={[styles.viewComment, { color: text }]}>
            View all 12 comments
          </Text>
          <View>
            <Text style={[styles.contentText, { color: text }]}>
              <Text style={[styles.username, { color: text }]}>
                lil_wyatt838{" "}
              </Text>
              Awesome tones
            </Text>
            <Text style={[styles.contentText, { color: text }]}>
              <Text style={[styles.username, { color: text }]}>
                pia.in.a.pod{" "}
              </Text>
              Gorg. Love it!❤️
            </Text>
          </View>
          <Text style={styles.postTime}>{post.postTime}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  header: {
    height: 58,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E6E6E6",
    position: "relative",
    justifyContent: "center",
  },
  headerIconBtn: {
    position: "absolute",
    left: 0,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitleWrap: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headerSmall: {
    fontSize: 11,
    color: "#777",
    letterSpacing: 0.6,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginTop: 2,
  },

  scrollContent: {
    paddingBottom: 72 + 10,
    // width: windowWidth,
    // maxWidth: windowWidth,
  },

  userRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  username: {
    fontWeight: "600",
    fontSize: 15,
  },

  subText: {
    fontSize: 12,
    color: "#8e8e8e",
  },

  settingBtn: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  settingText: {
    fontSize: 15,
  },

  postImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 4 / 5,
  },

  iconRow: {
    flexDirection: "row",
    padding: 6,
    justifyContent: "space-between",
  },

  leftIconsGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  iconBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  contentSection: {
    paddingHorizontal: 10,
    gap: 6,
  },

  likesRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarlikes: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -3,
  },

  likestext: {
    fontSize: 13,
    color: "#111",
    marginLeft: 6,
  },

  userPost: {
    flexDirection: "row",
  },

  contentText: {
    flex: 1,
    fontSize: 15,
    color: "#111",
  },

  viewComment: {
    fontSize: 13,
    color: "#8e8e8e",
    marginTop: 4,
  },

  postTime: {
    fontSize: 11,
    color: "#8e8e8e",
  },
});
