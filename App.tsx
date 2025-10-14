import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigations/RootNavigation";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style="dark" />
      <RootNavigation />
    </NavigationContainer>
  );
}
