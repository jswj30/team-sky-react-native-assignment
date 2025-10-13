import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigations/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
