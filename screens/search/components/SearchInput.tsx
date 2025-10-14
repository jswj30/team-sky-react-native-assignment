import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { defaultColor } from "../../../assets/modules/defaultColor";

export default function SearchInput({
  searchValue,
  setSearchValue,
  setIsFocused,
}: {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}) {
  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <TextInput
      placeholder="궁금한 이론이 있다면 검색해보세요."
      placeholderTextColor={defaultColor.gray2}
      style={styles.searchInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={searchValue}
      onChangeText={setSearchValue}
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    height: 68,
    padding: 0,
    margin: 0,
    fontFamily: "SUIT-Bold",
    color: defaultColor.black,
    fontSize: 17,
    letterSpacing: -0.2,
  },
});
