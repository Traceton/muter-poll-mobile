import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import {
  checkIfDropBoxIdAndPasswordIsValid,
  createNewDropBoxAnswer,
} from "../../api/dropBoxApi";

export default function CreateOrAnswer({ navigation, route }) {
  const [dropBoxId, setDropBoxId] = useState(route.params.dropBoxId);
  const [dropBoxPassword, setDropBoxPassword] = useState(null);
  const [dropBoxAnswer, setDropBoxAnswer] = useState(null);
  return (
    <ScrollView>
      <Card>
        <Card.Title>Leave a Message </Card.Title>

        <Input
          placeholder="Drop Box Message Here"
          onChangeText={(Text) => {
            setDropBoxAnswer(Text);
          }}
        />
        <Button
          title="Leave Message"
          type="solid"
          onPress={async () => {
            let valid = await createNewDropBoxAnswer(dropBoxId, dropBoxAnswer);
            if (valid === true) {
              alert("thanks for your message!");
              navigation.navigate("Create Or Answer");
            }
          }}
        />
        <Divider style={{ backgroundColor: "#333", marginVertical: 20 }} />
        <Card.Title>Have the password?</Card.Title>
        <Card.Title>
          Find out what others left in your drop box below.
        </Card.Title>
        <Input
          placeholder="Drop Box Password Here"
          onChangeText={(Text) => {
            setDropBoxPassword(Text);
          }}
        />
        <Button
          title="Check Drop Box"
          type="outline"
          buttonStyle={{}}
          onPress={() => {
            if (dropBoxPassword != null && dropBoxPassword != undefined) {
              const valid = checkIfDropBoxIdAndPasswordIsValid(
                dropBoxId,
                dropBoxPassword
              );
              if (valid === true) {
                navigation.navigate("View Drop Box", {
                  dropBoxId: dropBoxId,
                  dropBoxPassword: dropBoxPassword,
                });
              }
            } else {
              alert("Drop Box Id And Password Required");
            }
          }}
        />
      </Card>
    </ScrollView>
  );
}
