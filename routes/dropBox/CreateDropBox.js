import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { createNewDropBox } from "../../api/dropBoxApi";

export default function CreateDropBox({ navigation }) {
  const [dropBoxId, setDropBoxId] = useState(
    Math.ceil(Math.random() * 1000) + Math.ceil(Math.random() * 100).toString()
  );

  const [dropBoxName, setDropBoxName] = useState(null);
  const [dropBoxPassword, setDropBoxPassword] = useState(null);
  const [dropBoxLocation, setDropBoxLocation] = useState(null);

  return (
    <ScrollView>
      <Card>
        <Card.Title>Create New Drop Box</Card.Title>
        <Card.Title>Your Drop Box Id</Card.Title>
        <Card.Title>{dropBoxId}</Card.Title>
        <Card.Title>Name Your Drop Box</Card.Title>
        <Text>{dropBoxName}</Text>
        <Input
          placeholder="Drop Box Name Here"
          onChangeText={(Text) => {
            setDropBoxName(Text);
          }}
        />
        <Card.Title>Drop Box Password(used to check messages later)</Card.Title>
        <Text>{dropBoxPassword}</Text>
        <Input
          placeholder="Drop Box Password"
          onChangeText={(Text) => {
            setDropBoxPassword(Text);
          }}
        />
        <Card.Title>Add A Location(Optional)</Card.Title>
        <Input
          placeholder="Location Of Drop Box"
          onChangeText={(Text) => {
            setDropBoxLocation(Text);
          }}
        />
        <Button
          type="solid"
          title="Create Drop Box"
          onPress={() => {
            const success = createNewDropBox(
              dropBoxId,
              dropBoxName,
              dropBoxPassword,
              dropBoxLocation
            );
            if (success === true) {
              alert("Drop Box created. Dont forget your id and password");
            }
          }}
        />
      </Card>
    </ScrollView>
  );
}
