import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import {
  pageBackgroundColor,
  cardBackgroundColor,
  cardTextColor,
} from "../../_appConfig/Theme";
export default function NewOrView({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={{
        minHeight: "100%",
      }}
    >
      <Card
        containerStyle={{ justifyContent: "space-around", minHeight: "100%" }}
      >
        <Card.Title style={{ fontWeight: "200", fontSize: 35 }}>
          Would you like to answer a drop box or create a new one?
        </Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
          A drop box is a place where questions can be asked and answered
          anonymously. No account required.
        </Card.Title>
        <Button
          titleStyle={{ fontWeight: "300", fontSize: 30 }}
          buttonStyle={{ marginVertical: 10 }}
          type="solid"
          title="Answer a drop box"
          onPress={() => {
            navigation.navigate("Find Drop Box", {
              requiresPassword: false,
            });
          }}
        />
        <Button
          titleStyle={{ fontWeight: "300", fontSize: 30 }}
          buttonStyle={{ marginVertical: 10 }}
          type="solid"
          title="Create a new drop box"
          onPress={() => {
            navigation.navigate("Create Drop Box");
          }}
        />
        <Card.Title style={{ fontWeight: "200", fontSize: 20, marginTop: 25 }}>
          Already have your own drop box? Click below to see what people have
          said.
        </Card.Title>
        <Button
          titleStyle={{
            fontWeight: "300",
            fontSize: 30,
          }}
          buttonStyle={{}}
          type="solid"
          title="Read drop box answers"
          onPress={() => {
            navigation.navigate("Find Drop Box", {
              requiresPassword: true,
            });
          }}
        />
      </Card>
    </ScrollView>
  );
}
