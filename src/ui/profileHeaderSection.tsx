import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileHeaderSection() {
  const router = useRouter();
  return (
    <View>
      <View style={styles.userRow}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>frenchie_fry39</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
        <View style={styles.moreBtn}>
          <AntDesign name="plus" size={24} color="black" />
          <AntDesign name="menu" size={24} color="black" />
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
              source={require("../../assets/images/avatar.jpg")}
              style={styles.avatar}
            />
          </View>
        </LinearGradient>

        <View>
          <Text style={{ marginBottom: 8 }}>Fry</Text>
          <View style={{ flexDirection: "row", gap: 25 }}>
            <View>
              <Text>9</Text>
              <Text style={{ fontSize: 12 }}>posts</Text>
            </View>
            <View>
              <Text>1,134</Text>
              <Text style={{ fontSize: 12 }}>followers</Text>
            </View>
            <View>
              <Text>513</Text>
              <Text style={{ fontSize: 12 }}>following</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bio}>
        <Text>Here for a good time</Text>
        <Text>@frenchie_fry39</Text>
      </View>

      <View style={styles.profileActions}>
        <Pressable style={styles.actionBtn1}>
          <Text style={{ fontSize: 13 }}>Edit profile</Text>
        </Pressable>

        <Pressable style={styles.actionBtn1}>
          <Text style={{ fontSize: 13 }}>Share profile</Text>
        </Pressable>

        <Pressable style={styles.actionBtn2}>
          <Ionicons name="person-add-outline" size={16} color="black" />
        </Pressable>
      </View>

      <View style={styles.iconRow}>
        <MaterialIcons name="grid-on" size={26} color="black" />
        <AntDesign name="play-square" size={26} color="gray" />
        <MaterialIcons name="repeat" size={26} color="gray" />
        <MaterialIcons name="account-box" size={26} color="gray" />
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
