import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { checkIfDropBoxIdIsValid } from "../../api/dropBoxApi";

export default function CreateOrAnswer({ navigation }) {
  const [dropBoxId, setDropBoxId] = useState(null);

  return (
    <ScrollView>
      <Card>
        <Card.Title>Already have a Drop Box Code?</Card.Title>
        <Input
          placeholder="Drop Box Code here"
          onChangeText={(Text) => {
            setDropBoxId(Text);
          }}
        />
        <Button
          title="Find Drop Box"
          type="solid"
          buttonStyle={{}}
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
        <Divider style={{ backgroundColor: "#333", marginVertical: 20 }} />
        <Button
          title="Create New Drop Box"
          type="outline"
          buttonStyle={{}}
          onPress={() => {
            navigation.navigate("Create Drop Box");
          }}
        />
      </Card>
    </ScrollView>
  );
}
