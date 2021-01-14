import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { checkIfDropBoxIdIsValid } from "../../api/dropBoxApi";
import {
  pageBackgroundColor,
  cardBackgroundColor,
  cardTextColor,
} from "../../_appConfig/Theme";
export default function CreateOrAnswer({ navigation }) {
  const [dropBoxId, setDropBoxId] = useState("7128");

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: pageBackgroundColor,
        minHeight: "100%",
        justifyContent: "center",
      }}
    >
      <Card
        containerStyle={{
          borderRadius: 10,
          height: "60%",
          justifyContent: "space-around",
        }}
      >
        <Card.Title>Already have a Drop Box Code?</Card.Title>
        <Input
          label="Drop Box Code"
          placeholder="Code Here"
          style={{ marginVertical: 10 }}
          onChangeText={(Text) => {
            setDropBoxId(Text);
          }}
        />
        <Button
          title="Find Drop Box"
          type="solid"
          buttonStyle={{ marginVertical: 10 }}
          onPress={async () => {
            if (dropBoxId != null && dropBoxId != undefined) {
              let valid = await checkIfDropBoxIdIsValid(dropBoxId);
              if (valid === true) {
                navigation.navigate("Check If Password", {
                  dropBoxId: dropBoxId,
                });
              }
            } else {
              alert("Drop Box Code Required");
            }
          }}
        />
        <Divider style={{ backgroundColor: "#333", marginVertical: 30 }} />
        <Button
          title="Create New Drop Box"
          type="outline"
          buttonStyle={{ marginVertical: 30 }}
          onPress={() => {
            navigation.navigate("Create Drop Box");
          }}
        />
      </Card>
    </ScrollView>
  );
}
