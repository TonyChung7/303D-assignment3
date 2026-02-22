import useThemeColor from "@/src/constants/useThemeColor";
import PostList from "@/src/ui/profileSection/postList";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { background } = useThemeColor();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: background }}
      edges={["top"]}
    >
      <View style={styles.container}>
        <PostList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
