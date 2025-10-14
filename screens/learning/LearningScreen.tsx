import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { defaultColor } from "../../assets/modules/defaultColor";
import { IS_PHONE } from "../../assets/modules/commonModules";
import SearchInputSection from "./components/SearchInputSection";
import bannerImage from "../../assets/images/learning/banner_image.jpg";

export default function LearningScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <SearchInputSection />
      <Image
        source={bannerImage}
        style={[
          styles.bannerImage,
          width <= IS_PHONE && styles.bannerImagePhone,
        ]}
      />
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
  bannerImagePhone: {
    width: 340,
    height: 124,
  },
});
