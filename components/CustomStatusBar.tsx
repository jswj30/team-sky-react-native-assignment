import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { defaultColor } from "../assets/modules/defaultColor";

export default function CustomStatusBar() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { height: top }]}>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultColor.white,
  },
});
