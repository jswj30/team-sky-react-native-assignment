import { useCallback } from "react";
import { StyleSheet, Pressable, Text, useWindowDimensions } from "react-native";
import { defaultColor } from "../../../assets/modules/defaultColor";
import { IS_PHONE } from "../../../assets/modules/commonModules";

export default function SearchButton({ searchValue }: { searchValue: string }) {
  const { width } = useWindowDimensions();

  const onPressSearchButton = useCallback(() => {
    alert(searchValue);
  }, [searchValue]);

  const disabled = searchValue.length === 0;

  return (
    <Pressable
      style={[
        styles.searchButton,
        width <= IS_PHONE && styles.searchButtonPhone,
        disabled && { opacity: 0.43 },
      ]}
      onPress={onPressSearchButton}
      disabled={disabled}
    >
      <Text style={styles.searchButtonText}>검색하기</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchButton: {
    width: 545,
    height: 58,
    backgroundColor: defaultColor.blue1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonPhone: {
    width: 340,
  },
  searchButtonText: {
    fontFamily: "SUIT-Medium",
    color: defaultColor.white,
    fontSize: 19,
    letterSpacing: -0.2,
  },
});
