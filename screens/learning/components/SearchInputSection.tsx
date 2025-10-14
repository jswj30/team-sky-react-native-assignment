import { useCallback } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/type_list";
import { defaultColor } from "../../../assets/modules/defaultColor";
import SearchIcon from "../../../components/SearchIcon";

export default function SearchInputSection() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressInputSection = useCallback(() => {
    navigation.navigate("Search");
  }, []);

  return (
    <Pressable style={styles.container} onPress={onPressInputSection}>
      <SearchIcon />
      <Text style={styles.searchInput}>궁금한 이론이 있다면 검색해보세요.</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: defaultColor.gray1,
    borderRadius: 20,
    backgroundColor: defaultColor.white,
    width: 734,
    height: 72,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    boxShadow: "0px 3.46px 20.76px 0px rgba(0, 0, 0, 0.05)",
  },
  searchInput: {
    fontFamily: "SUIT-Bold",
    color: defaultColor.gray2,
    fontSize: 17,
    letterSpacing: -0.2,
  },
});
