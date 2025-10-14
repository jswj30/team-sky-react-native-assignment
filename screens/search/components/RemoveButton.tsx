import { Dispatch, SetStateAction, useCallback } from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import removeIcon from "../../../assets/images/search/remove_icon.png";

export default function RemoveButton({
  setSearchValue,
}: {
  setSearchValue: Dispatch<SetStateAction<string>>;
}) {
  const onPressRemoveButton = useCallback(() => {
    setSearchValue("");
  }, []);

  return (
    <Pressable
      onPress={onPressRemoveButton}
      hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
    >
      <Image
        source={removeIcon}
        resizeMode="contain"
        style={styles.removeIcon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  removeIcon: {
    width: 24,
    height: 24,
  },
});
