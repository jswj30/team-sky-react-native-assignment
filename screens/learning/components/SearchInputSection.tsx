import { Image, StyleSheet, Text, View } from "react-native";
import { defaultColor } from "../../../assets/modules/defaultColor";
import searchIcon from "../../../assets/images/learning/search_icon.png";

export default function SearchInputSection() {
  return (
    <View style={styles.container}>
      <Image
        source={searchIcon}
        resizeMode="contain"
        style={styles.searchIcon}
      />
      <Text style={styles.searchInput}>궁금한 이론이 있다면 검색해보세요.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: defaultColor.gray2,
    borderRadius: 20,
    width: 734,
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    fontFamily: "SUIT-Bold",
    color: defaultColor.gray3,
    fontSize: 17,
  },
});
