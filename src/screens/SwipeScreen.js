import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SwipeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>SwipeScreen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SwipeScreen;
