import { StyleSheet, Text, View } from "react-native";

export default function MyStudyScreen() {
  return (
    <View style={styles.container}>
      <Text>나의 서재</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
