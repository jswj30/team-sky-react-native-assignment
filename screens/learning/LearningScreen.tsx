import { useCallback, useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { defaultColor } from "../../assets/modules/defaultColor";
import SearchInputSection from "./components/SearchInputSection";
import QuitSection from "./components/QuitSection";
import SearchButton from "./components/SearchButton";
import BannerImage from "./components/BannerImage";

const PADDING = 156;
const DURATION = 200;

export default function LearningScreen() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

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

  // input 바깥 배경화면 클릭 시 keyboard dismiss
  useFocusEffect(
    useCallback(() => {
      const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () =>
        setIsFocused(false)
      );

      return () => keyboardHideListener?.remove();
    }, [])
  );

  const onPressQuitIcon = useCallback(() => {
    Keyboard.dismiss();
    setIsFocused(false);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onPressQuitIcon}>
      <View style={styles.container}>
        {/* Quit button */}
        <QuitSection
          DURATION={DURATION}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          onPressQuitIcon={onPressQuitIcon}
        />

        {/* Contents */}
        <View style={styles.contentSection}>
          {/* Input */}
          <SearchInputSection
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            PADDING={PADDING}
            DURATION={DURATION}
          />
          {/* Search button */}
          <SearchButton searchValue={searchValue} />
          {/* Banner */}
          <BannerImage DURATION={DURATION} isFocused={isFocused} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultColor.white,
    flex: 1,
  },
  contentSection: {
    alignItems: "center",
    gap: 60,
    paddingTop: PADDING + 11,
    position: "relative",
  },
});
