import React from "react";
import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SwipeCardContainer from "../components/SwipeCardComponent/SwipeCardContainer";

const SwipeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <SwipeCardContainer />
      </View>
      <View style={styles.buttons}>
        <Text>Buttons</Text>
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
    flexBasis: "90%",
    // backgroundColor: "green",
    // padding: 15,
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttons: {
    flexBasis: "10%",
    backgroundColor: "yellow",
    marginTop: 10,
  },
});

export default SwipeScreen;
