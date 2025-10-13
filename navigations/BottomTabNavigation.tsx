import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types/type_list";
import LearningScreen from "../screens/learning/LearningScreen";
import MyStudyScreen from "../screens/myStudy/MyStudyScreen";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Learning" component={LearningScreen} />
      <Tab.Screen name="MyStudy" component={MyStudyScreen} />
    </Tab.Navigator>
  );
}
