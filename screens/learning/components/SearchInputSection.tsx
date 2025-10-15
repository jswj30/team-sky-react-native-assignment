import { Dispatch, SetStateAction, useCallback, useRef } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { defaultColor } from "../../../assets/modules/defaultColor";
import { IS_PHONE } from "../../../assets/modules/commonModules";
import SearchIcon from "../../../components/SearchIcon";
import RemoveButton from "./RemoveButton";

export default function SearchInputSection({
  isFocused,
  setIsFocused,
  searchValue,
  setSearchValue,
  PADDING,
  DURATION,
}: {
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  PADDING: number;
  DURATION: number;
}) {
  const { width } = useWindowDimensions();

  const borderAnimation = useRef(new Animated.Value(1)).current;
  const inputAnimation = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    useCallback(() => {
      Animated.timing(inputAnimation, {
        toValue: isFocused ? -PADDING : 0,
        useNativeDriver: true,
        duration: DURATION,
      }).start();

      Animated.timing(borderAnimation, {
        toValue: isFocused ? 1 : 0,
        useNativeDriver: true,
        duration: DURATION,
      }).start();
    }, [isFocused, inputAnimation, borderAnimation])
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Animated.View
      style={[
        styles.searchInputSection,
        width <= IS_PHONE && styles.searchInputSectionPhone,
        {
          top: PADDING,
          transform: [
            {
              translateY: inputAnimation,
            },
          ],
          borderColor: borderAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [defaultColor.gray1, defaultColor.blue1],
          }),
        },
      ]}
    >
      <Pressable onPress={handleFocus} style={styles.searchInputPressable}>
        <SearchIcon />
        <TextInput
          placeholder="궁금한 이론이 있다면 검색해보세요."
          placeholderTextColor={defaultColor.gray2}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchValue}
          onChangeText={setSearchValue}
          style={styles.searchInput}
        />
        <RemoveButton setSearchValue={setSearchValue} />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  searchInputSection: {
    borderWidth: 2,
    borderColor: defaultColor.gray1,
    borderRadius: 20,
    backgroundColor: defaultColor.white,
    width: 734,
    height: 72,
    boxShadow: "0px 3.46px 20.76px 0px rgba(0, 0, 0, 0.05)",
    position: "absolute",
    zIndex: 10,
  },
  searchInputSectionPhone: {
    width: 340,
  },
  searchInputPressable: {
    width: "100%",
    height: 72,
    borderRadius: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
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
