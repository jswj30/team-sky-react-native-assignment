import { useCallback, useRef, useState } from "react";
import {
  Animated,
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { defaultColor } from "../../assets/modules/defaultColor";
import { IS_PHONE } from "../../assets/modules/commonModules";
import SearchIcon from "../../components/SearchIcon";
import RemoveButton from "./components/RemoveButton";
import SearchButton from "./components/SearchButton";
import quitIcon from "../../assets/images/learning/quit_icon.png";
import bannerImage from "../../assets/images/learning/banner_image.jpg";

const PADDING = 156;
const DURATION = 200;

export default function LearningScreen() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const { width } = useWindowDimensions();

  const quitAnimation = useRef(new Animated.Value(1)).current;
  const inputAnimation = useRef(new Animated.Value(0)).current;
  const bannerAnimation = useRef(new Animated.Value(1)).current;

  useFocusEffect(
    useCallback(() => {
      Animated.timing(quitAnimation, {
        toValue: isFocused ? 1 : 0,
        useNativeDriver: true,
        duration: DURATION,
      }).start();

      Animated.timing(inputAnimation, {
        toValue: isFocused ? -PADDING : 0,
        useNativeDriver: true,
        duration: DURATION,
      }).start();

      Animated.timing(bannerAnimation, {
        toValue: isFocused ? 0 : 1,
        useNativeDriver: true,
        duration: DURATION,
      }).start();
    }, [isFocused, quitAnimation, bannerAnimation])
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

  const onPressInputSection = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={onPressQuitIcon}>
      <View style={styles.container}>
        {/* Quit 버튼 */}
        <Animated.View
          style={[
            styles.quitSection,
            {
              opacity: quitAnimation,
            },
          ]}
        >
          <Pressable
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={onPressQuitIcon}
          >
            <Image
              source={quitIcon}
              resizeMode="contain"
              style={styles.quitIcon}
            />
          </Pressable>
        </Animated.View>

        {/* Contents */}
        <View style={styles.contentSection}>
          {/* Input */}
          <Animated.View
            style={[
              styles.searchInputSection,
              width <= IS_PHONE && styles.searchInputSectionPhone,
              {
                transform: [
                  {
                    translateY: inputAnimation,
                  },
                ],
                borderColor: quitAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [defaultColor.gray1, defaultColor.blue1],
                }),
              },
            ]}
          >
            <Pressable
              onPress={onPressInputSection}
              style={styles.searchInputPressable}
            >
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

          {/* Search button */}
          <SearchButton searchValue={searchValue} />

          {/* Banner */}
          <Animated.Image
            source={bannerImage}
            style={[
              styles.bannerImage,
              width <= IS_PHONE && styles.bannerImagePhone,
              { opacity: bannerAnimation },
            ]}
          />
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
  quitSection: {
    backgroundColor: defaultColor.white,
    width: "100%",
    height: 62,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  quitIcon: {
    width: 32,
    height: 32,
  },
  contentSection: {
    alignItems: "center",
    gap: 60,
    paddingTop: PADDING + 11,
    position: "relative",
  },
  searchInputSection: {
    borderWidth: 2,
    borderColor: defaultColor.gray1,
    borderRadius: 20,
    backgroundColor: defaultColor.white,
    width: 734,
    height: 72,
    boxShadow: "0px 3.46px 20.76px 0px rgba(0, 0, 0, 0.05)",
    position: "absolute",
    top: PADDING,
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
