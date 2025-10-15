import { useCallback, useRef } from "react";
import { Animated, StyleSheet, useWindowDimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { IS_PHONE } from "../../../assets/modules/commonModules";
import bannerImage from "../../../assets/images/learning/banner_image.jpg";

export default function BannerImage({
  DURATION,
  isFocused,
}: {
  DURATION: number;
  isFocused: boolean;
}) {
  const { width } = useWindowDimensions();

  const bannerAnimation = useRef(new Animated.Value(1)).current;

  useFocusEffect(
    useCallback(() => {
      Animated.timing(bannerAnimation, {
        toValue: isFocused ? 0 : 1,
        useNativeDriver: true,
        duration: DURATION,
      }).start();
    }, [isFocused, bannerAnimation])
  );

  return (
    <Animated.Image
      source={bannerImage}
      style={[
        styles.bannerImage,
        width <= IS_PHONE && styles.bannerImagePhone,
        { opacity: bannerAnimation },
      ]}
    />
  );
}

const styles = StyleSheet.create({
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
