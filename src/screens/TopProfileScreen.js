import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const TopProfileScreen = ({ navigation }) => {
  const goToLikes = () => {
    navigation.navigate("Like");
  };
  return (
    <View style={styles.container}>
      <Button onPress={goToLikes} title="Likes" />
      <Text>TopProfileScreen!</Text>
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

export default TopProfileScreen;
