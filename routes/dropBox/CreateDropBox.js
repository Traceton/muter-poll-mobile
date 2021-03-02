import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { createNewDropBox } from "../../api/dropBoxApi";
// import { API } from "@env";
export default function CreateDropBox({ navigation }) {
  const [dropBoxId, setDropBoxId] = useState(
    Math.ceil(Math.random() * 1000) + Math.ceil(Math.random() * 100).toString()
  );

  const [dropBoxName, setDropBoxName] = useState(null);
  const [dropBoxQuestion, setdropBoxQuestion] = useState(null);
  const [dropBoxPassword, setDropBoxPassword] = useState(null);
  const [dropBoxLocation, setDropBoxLocation] = useState(null);
  const [dropBoxUserEmail, setDropBoxUserEmail] = useState(null);

  return (
    <ScrollView>
      <Card>
        <Card.Title>Create New Drop Box</Card.Title>
        <Card.Title>Your Drop Box Id</Card.Title>
        <Card.Title style={{ fontSize: 30 }}>{dropBoxId}</Card.Title>
        <Card.Title>Your Drop Box Name</Card.Title>
        <Input
          placeholder="The name of your drop box"
          onChangeText={(Text) => {
            setDropBoxName(Text);
          }}
        />
        <Card.Title>Your Drop Box Question</Card.Title>
        <Input
          placeholder="The question you want answered."
          onChangeText={(Text) => {
            setdropBoxQuestion(Text);
          }}
        />
        <Card.Title>
          Drop Box Password (used to check messages later)
        </Card.Title>
        <Input
          placeholder="Drop Box Password"
          onChangeText={(Text) => {
            setDropBoxPassword(Text);
          }}
        />
        <Card.Title>
          Your Email (Where we'll send your drop box info){" "}
        </Card.Title>
        <Input
          placeholder="Your Email"
          onChangeText={(Text) => {
            setDropBoxUserEmail(Text);
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
          onPress={async () => {
            const success = await createNewDropBox(
              dropBoxId,
              dropBoxName,
              dropBoxQuestion,
              dropBoxPassword,
              dropBoxLocation
            );
            if (success && success === true) {
              navigation.navigate("View Drop Box", {
                dropBoxId: dropBoxId,
                dropBoxPassword: dropBoxPassword,
              });
            }
          }}
        />
      </Card>
    </ScrollView>
  );
}
