import useThemeColor from "@/src/constants/useThemeColor";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { text, background } = useThemeColor();
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin() {
    if (account === "" || password === "") {
      Alert.alert("Alert", "Please fill in all fields");
    } else {
      router.replace("/home");
    }
  }
  return (
    <SafeAreaView style={[style.safeView, { backgroundColor: background }]}>
      <View style={style.safeView}>
        <View style={style.titleContainer}>
          <Text style={{ fontSize: 24, color: text }}>Instagram Login</Text>
        </View>
        <TextInput
          style={[style.userInfo, { backgroundColor: background, color: text }]}
          placeholder="Username, email, or mobile number"
          placeholderTextColor="gray"
          onChangeText={(text) => setAccount(text)}
        />
        <TextInput
          style={[style.userInfo, { backgroundColor: background, color: text }]}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable
          style={({ pressed }) => [
            style.loginButton,
            pressed && style.pressedButton,
          ]}
          onPress={() => {
            handleLogin();
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
        </Pressable>
        <Text style={{ fontSize: 12, color: "blue" }}>Forget Password?</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          style.createAccountButton,
          pressed && style.pressedCreateButton,
        ]}
      >
        <Text style={{ color: "blue" }}>Create New Account</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeView: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 100,
    marginBottom: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    width: "80%",
    height: 60,
    marginTop: 30,
    borderWidth: 3,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  loginButton: {
    width: "80%",
    marginVertical: 30,
    backgroundColor: "#2d90d6",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pressedButton: {
    backgroundColor: "#1b6dbf",
  },
  createAccountButton: {
    width: "80%",
    marginVertical: 30,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "blue",
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pressedCreateButton: {
    opacity: 0.5,
  },
});
