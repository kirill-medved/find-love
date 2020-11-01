import { Dimensions } from "react-native";
import SwipeCard from "./SwipeCard";
import React from "react";

const SwipeCardContainer = (props) => {
  const { width, height } = Dimensions.get("window");
  return <SwipeCard width={width} height={height} />;
};

export default SwipeCardContainer;
