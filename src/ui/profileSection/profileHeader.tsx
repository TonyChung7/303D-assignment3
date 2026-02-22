import useThemeColor from "@/src/constants/useThemeColor";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileHeaderSection() {
  const { text, tabIconDefault, tabIconSelected } = useThemeColor();
  return (
    <View>
      <View style={styles.userRow}>
        <Text style={{ fontSize: 16, fontWeight: "bold", color: text }}>
          frenchie_fry39
        </Text>
        <Ionicons name="chevron-down" size={24} color={tabIconDefault} />
        <View style={styles.moreBtn}>
          <AntDesign name="plus" size={24} color={tabIconDefault} />
          <AntDesign name="menu" size={24} color={tabIconDefault} />
        </View>
      </View>

      <View style={styles.userInfo}>
        <LinearGradient
          colors={["yellow", "red", "blue"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBorder}
        >
          <View style={styles.avatarBorder}>
            <Image
              source={require("@/assets/images/avatar.jpg")}
              style={styles.avatar}
            />
          </View>
        </LinearGradient>

        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 8, color: text }}>Fry</Text>
          <View style={{ flexDirection: "row", gap: 25 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: text }}>9</Text>
              <Text style={{ fontSize: 12, color: text }}>posts</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: text }}>1,134</Text>
              <Text style={{ fontSize: 12, color: text }}>followers</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: text }}>513</Text>
              <Text style={{ fontSize: 12, color: text }}>following</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bio}>
        <Text style={{ color: text }}>Here for a good time</Text>
        <Text style={{ color: text }}>@frenchie_fry39</Text>
      </View>

      <View style={styles.profileActions}>
        <Pressable
          style={({ pressed }) => [
            styles.actionBtn1,
            pressed && styles.pressedStyle,
          ]}
        >
          <Text style={{ fontSize: 13, color: text }}>Edit profile</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.actionBtn1,
            pressed && styles.pressedStyle,
          ]}
        >
          <Text style={{ fontSize: 13, color: text }}>Share profile</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.actionBtn2,
            pressed && styles.pressedStyle,
          ]}
        >
          <Ionicons name="person-add-outline" size={16} color="black" />
        </Pressable>
      </View>

      <View style={styles.iconRow}>
        <MaterialIcons name="grid-on" size={26} color={tabIconSelected} />
        <AntDesign name="play-square" size={26} color={tabIconDefault} />
        <MaterialIcons name="repeat" size={26} color={tabIconDefault} />
        <MaterialIcons name="account-box" size={26} color={tabIconDefault} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  moreBtn: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
    flex: 1,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    flex: 1,
  },
  gradientBorder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarBorder: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bio: {
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  profileActions: {
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 14,
  },
  actionBtn1: {
    backgroundColor: "lightgray",
    borderRadius: 12,
    padding: 7,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pressedStyle: {
    opacity: 0.5,
  },
  actionBtn2: {
    backgroundColor: "lightgray",
    borderRadius: 12,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
});
