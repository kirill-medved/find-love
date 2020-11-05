import React from "react";
import { View, StyleSheet, Image, Alert, Pressable } from "react-native";
import SwipeCardContainer from "../components/SwipeCardComponent/SwipeCardContainer";

const SwipeScreen = (props) => {
  const putLike = () => {
    return Alert.alert("I like someone!");
  };

  const putNope = () => {
    return Alert.alert("I nope someone!");
  };

  const putSuperLike = () => {
    return Alert.alert("I superlike someone!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <SwipeCardContainer />
      </View>

      <View style={styles.buttons}>
        <Pressable onPress={putNope}>
          <Image
            source={require("../../common/images/buttons/cross.png")}
            style={styles.button}
          />
        </Pressable>
        <Pressable onPress={putSuperLike}>
          <Image
            source={require("../../common/images/buttons/star.png")}
            style={styles.button}
          />
        </Pressable>
        <Pressable onPress={putLike}>
          <Image
            source={require("../../common/images/buttons/heart.png")}
            style={styles.button}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  card: {
    flexBasis: "85%",
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttons: {
    flexBasis: "15%",
    backgroundColor: "yellow",
    marginTop: 10,
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "space-around",
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
});

export default SwipeScreen;
