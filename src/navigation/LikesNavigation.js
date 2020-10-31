import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LikesScreen from "../screens/LikesScreen";
import TopProfileScreen from "../screens/TopProfileScreen";

const Stack = createStackNavigator();

const LikesNav = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Like" component={LikesScreen} />
      <Stack.Screen name="Top Profile" component={TopProfileScreen} />
    </Stack.Navigator>
  );
};

export default LikesNav;
