import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";

const SwipeCard = (props) => {
  return (
    <ImageBackground
      source={{
        uri: props.images[props.numberOfImage],
      }}
      style={styles.image}
    >
      <View style={styles.changeImage}>
        <Pressable
          style={styles.pressLeft}
          onPress={() => {
            if (props.numberOfImage - 1 < 0) return null;
            props.setImage(props.numberOfImage - 1);
          }}
        ></Pressable>
        <Pressable
          style={styles.pressRight}
          onPress={() => {
            if (props.numberOfImage + 1 >= props.lengthOfImages) return null;
            props.setImage(props.numberOfImage + 1);
          }}
        ></Pressable>
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.info}>Information</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    flexDirection: "column",

    alignItems: "stretch",
    justifyContent: "center",
    alignContent: "stretch",
    borderColor: "black",

    borderRadius: 15,
    overflow: "hidden",
  },
  changeImage: {
    flexDirection: "row",
    flexBasis: "85%",
    // backgroundColor: "green",
    height: 1,
    width: "100%",
  },
  pressLeft: {
    flexBasis: "50%",
    // backgroundColor: "red",
    height: "100%",
  },
  pressRight: {
    flexBasis: "50%",
    // backgroundColor: "blue",
    height: "100%",
  },
  infoBlock: {
    flexBasis: "15%",
    width: "100%",
    backgroundColor: "gray",
  },
  info: {
    margin: 10,
    color: "#000",
  },
});

export default SwipeCard;
