import { useCallback } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../types/type_list";
import { defaultColor } from "../../../assets/modules/defaultColor";
import quitIcon from "../../../assets/images/search/quit_icon.png";

export default function QuitIconSection() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressQuitIcon = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={onPressQuitIcon}
      >
        <Image source={quitIcon} resizeMode="contain" style={styles.quitIcon} />
      </Pressable>
    </View>
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
