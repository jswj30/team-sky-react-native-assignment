import { StyleSheet, Text, View } from "react-native";

export default function LearningScreen() {
  return (
    <View style={styles.container}>
      <Text>학습</Text>
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
