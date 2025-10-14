import { Image, StyleSheet, View } from "react-native";
import SearchInputSection from "./components/SearchInputSection";
import bannerImage from "../../assets/images/learning/banner_image.jpg";
import { defaultColor } from "../../assets/modules/defaultColor";

export default function LearningScreen() {
  return (
    <View style={styles.container}>
      <SearchInputSection />
      <Image source={bannerImage} style={styles.bannerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultColor.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },
  bannerImage: {
    width: 545,
    height: 198,
    borderRadius: 16,
  },
});
