import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

const SwipeCard = (props) => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://bigpicture.ru/wp-content/uploads/2020/01/71715608_728411400955857_1867320004081534638_n-728x800.jpg",
        // "https://img.icons8.com/pastel-glyph/2x/person-male.png",
      }}
      style={styles.image}
    >
      <Text style={styles.info}>Information</Text>
    </ImageBackground>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: "column",

    alignItems: "flex-start",
    justifyContent: "flex-end",
    borderColor: "black",

    borderRadius: 15,
    overflow: "hidden",
    padding: 10,
  },
  info: {
    padding: 0,
  },
});

export default SwipeCard;
