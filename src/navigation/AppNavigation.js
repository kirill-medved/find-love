import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SwipeScreen from "./../screens/SwipeScreen";
import MessagesScreen from "./../screens/MessagesScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import LikesNav from "./LikesNavigation";

const MatTop = createMaterialTopTabNavigator();

const AppNavigation = () => {
  return (
    <MatTop.Navigator>
      <MatTop.Screen name="Swipe" component={SwipeScreen} />
      <MatTop.Screen name="Like" component={LikesNav} />
      <MatTop.Screen name="Messages" component={MessagesScreen} />
      <MatTop.Screen name="Profile" component={ProfileScreen} />
    </MatTop.Navigator>
  );
};

export default AppNavigation;
