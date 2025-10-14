import { Image, StyleSheet } from "react-native";
import icon from "../assets/images/common/search_icon.png";

export default function SearchIcon() {
  return <Image source={icon} resizeMode="contain" style={styles.icon} />;
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
