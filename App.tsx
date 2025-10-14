import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigations/RootNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import CustomStatusBar from "./components/CustomStatusBar";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SUIT-Regular": require("./assets/fonts/SUIT-Regular.otf"),
    "SUIT-Bold": require("./assets/fonts/SUIT-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <CustomStatusBar />
        <RootNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
