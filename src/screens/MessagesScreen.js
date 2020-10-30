import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MessagesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>MessagesScreen!</Text>
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

export default MessagesScreen;
