import { StyleSheet, Text, View } from "react-native";
import { defaultColor } from "../../assets/modules/defaultColor";

export default function MyStudyScreen() {
  return (
    <View style={styles.container}>
      <Text>나의 서재</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultColor.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
