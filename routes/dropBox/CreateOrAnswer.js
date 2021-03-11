import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { getDropBoxIfValid } from "../../api/dropBoxApi";
import {
  pageBackgroundColor,
  cardBackgroundColor,
  cardTextColor,
} from "../../_appConfig/Theme";
export default function CreateOrAnswer({ navigation }) {
  const [dropBoxId, setDropBoxId] = useState(null);

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
          justifyContent: "space-around",
        }}
      >
        <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
          Answer a question or view your drop box anonymous answers.
        </Card.Title>
        <Input
          // label="Drop Box Code"
          placeholder="Drop Box Code here"
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
              let publicDropBoxInfo = await getDropBoxIfValid(dropBoxId);
              if (publicDropBoxInfo) {
                navigation.navigate("Check If Password", {
                  dropBoxId: dropBoxId,
                  publicDropBoxInfo: publicDropBoxInfo,
                });
              } else if (publicDropBoxInfo === false) {
                alert("No drop box was found, please check your code.");
              }
            } else {
              alert("Drop Box Code Required");
            }
          }}
        />
        <Divider style={{ backgroundColor: "#333", marginVertical: 30 }} />
        <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
          Ask a question and recieve a link to share with others, who can then
          answer anonymously.
        </Card.Title>
        <Button
          title="Create New Drop Box"
          type="solid"
          buttonStyle={{ marginVertical: 30 }}
          onPress={() => {
            navigation.navigate("Create Drop Box");
          }}
        />
      </Card>
    </ScrollView>
  );
}
