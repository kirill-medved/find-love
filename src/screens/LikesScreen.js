import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const LikesScreen = ({ navigation }) => {
  const goToTopProfile = () => {
    navigation.navigate("Top Profile");
  };

  return (
    <View style={styles.container}>
      <Button onPress={goToTopProfile} title="Top Profile" />
      <Text>LikeScreen!</Text>
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

export default LikesScreen;
