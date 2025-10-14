import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "../types/type_list";
import { RouteProp } from "@react-navigation/native";
import { defaultColor } from "../assets/modules/defaultColor";
import LearningScreen from "../screens/learning/LearningScreen";
import MyStudyScreen from "../screens/myStudy/MyStudyScreen";
import learningIcon from "../assets/images/bottomTab/learning_icon.png";
import learningIconFocused from "../assets/images/bottomTab/learning_icon_focused.png";
import myStudyIcon from "../assets/images/bottomTab/my_study_icon.png";
import myStudyIconFocused from "../assets/images/bottomTab/my_study_icon_focused.png";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const tabBarIcon = (
  route: RouteProp<BottomTabParamList, keyof BottomTabParamList>,
  focused: boolean
) => {
  if (route.name === "Learning") {
    return (
      <Image
        source={focused ? learningIconFocused : learningIcon}
        resizeMode="contain"
        style={[styles.icon]}
      />
    );
  }

  if (route.name === "MyStudy") {
    return (
      <Image
        source={focused ? myStudyIconFocused : myStudyIcon}
        resizeMode="contain"
        style={[styles.icon]}
      />
    );
  }

  return <></>;
};

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: RouteProp<BottomTabParamList, keyof BottomTabParamList>;
      }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: defaultColor.black,
        tabBarInactiveTintColor: defaultColor.gray1,
        tabBarIcon: ({ focused }: { focused: boolean }) =>
          tabBarIcon(route, focused),
      })}
    >
      <Tab.Screen
        name="Learning"
        options={{
          title: "학습",
        }}
        component={LearningScreen}
      />
      <Tab.Screen
        name="MyStudy"
        options={{
          title: "나의 서재",
        }}
        component={MyStudyScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    elevation: 0,
    borderTopWidth: 1,
    borderTopColor: defaultColor.bottomTabTopWidth,
  },
  tabBarLabelStyle: {
    fontFamily: "SUIT-Regular",
    fontSize: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
