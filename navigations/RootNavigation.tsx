import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/type_list";
import BottomTabNavigation from "./BottomTabNavigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
    </Stack.Navigator>
  );
}
