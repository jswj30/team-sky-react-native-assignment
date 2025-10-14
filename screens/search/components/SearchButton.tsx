import { useCallback } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { defaultColor } from "../../../assets/modules/defaultColor";

export default function SearchButton({ searchValue }: { searchValue: string }) {
  const onPressSearchButton = useCallback(() => {
    alert(searchValue);
  }, [searchValue]);

  const disabled = searchValue.length === 0;

  return (
    <Pressable
      style={[styles.searchButton, disabled && { opacity: 0.43 }]}
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
  searchButtonText: {
    fontFamily: "SUIT-Medium",
    color: defaultColor.white,
    fontSize: 19,
    letterSpacing: -0.2,
  },
});
