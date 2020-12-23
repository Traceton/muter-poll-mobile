import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-elements";

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.homeContainer}>
      <Text style={styles.homeTitle}>Workplace Survey</Text>
      <Text style={styles.homeSubtitle}>
        This app is made so that peoples needs or wants can be heard,
        anonymously.
      </Text>
      <Button
        type="solid"
        title="Take a Survey"
        buttonStyle={{
          width: 350,
          height: 60,
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("Take Survey");
        }}
      />
      <Button
        type="solid"
        title="Create a Survey"
        buttonStyle={{
          width: 350,
          height: 60,
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("Create Survey");
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    height: "95%",
    backgroundColor: "#333",
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  homeTitle: {
    color: "white",
    fontSize: 25,
    margin: 5,
  },
  homeSubtitle: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    margin: 5,
  },
});
