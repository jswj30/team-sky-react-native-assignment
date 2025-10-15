import { Dispatch, SetStateAction, useCallback, useRef } from "react";
import { Animated, Image, Keyboard, Pressable, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { defaultColor } from "../../../assets/modules/defaultColor";
import quitIcon from "../../../assets/images/learning/quit_icon.png";

export default function QuitSection({
  DURATION,
  isFocused,
  setIsFocused,
  onPressQuitIcon,
}: {
  DURATION: number;
  isFocused: boolean;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
  onPressQuitIcon: () => void;
}) {
  const quitAnimation = useRef(new Animated.Value(1)).current;

  useFocusEffect(
    useCallback(() => {
      Animated.timing(quitAnimation, {
        toValue: isFocused ? 1 : 0,
        useNativeDriver: true,
        duration: DURATION,
      }).start();
    }, [isFocused, quitAnimation])
  );

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: quitAnimation,
        },
      ]}
    >
      <Pressable
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={onPressQuitIcon}
      >
        <Image source={quitIcon} resizeMode="contain" style={styles.quitIcon} />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
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
});
