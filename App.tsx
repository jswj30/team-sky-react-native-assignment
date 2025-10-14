import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigations/RootNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SUIT-Regular": require("./assets/fonts/SUIT-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
