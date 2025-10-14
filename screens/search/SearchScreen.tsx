import { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { defaultColor } from "../../assets/modules/defaultColor";
import SearchIcon from "../../components/SearchIcon";
import QuitIconSection from "./components/QuitIconSection";
import SearchButton from "./components/SearchButton";
import RemoveButton from "./components/RemoveButton";
import SearchInput from "./components/SearchInput";

export default function SearchScreen() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useFocusEffect(
    useCallback(() => {
      const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () =>
        setIsFocused(false)
      );

      return () => keyboardHideListener?.remove();
    }, [])
  );

  const handleKeyboardHide = useCallback(() => {
    Keyboard.dismiss();
    setIsFocused(false);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <QuitIconSection />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.avoid}
        >
          <View style={styles.searchSection}>
            <View
              style={[styles.searchInputSection, isFocused && styles.isFocused]}
            >
              <SearchIcon />

              <SearchInput
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setIsFocused={setIsFocused}
              />
              <RemoveButton setSearchValue={setSearchValue} />
            </View>

            <SearchButton searchValue={searchValue} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultColor.white,
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
  searchSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 95,
  },
  searchInputSection: {
    borderWidth: 2,
    borderColor: defaultColor.gray1,
    borderRadius: 20,
    backgroundColor: defaultColor.white,
    width: 734,
    height: 72,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    boxShadow: "0px 3.46px 20.76px 0px rgba(0, 0, 0, 0.05)",
  },
  isFocused: {
    borderColor: defaultColor.blue1,
  },
});
