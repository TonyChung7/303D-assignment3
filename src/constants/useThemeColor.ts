import { useColorScheme } from "react-native";
import { Colors } from "./colors";

export default function useThemeColor() {
  const colorScheme = useColorScheme();
  const themeColor = colorScheme === "dark" ? Colors.dark : Colors.light;
  return themeColor;
}
