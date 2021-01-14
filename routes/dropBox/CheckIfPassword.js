import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import {
  checkIfDropBoxIdAndPasswordIsValid,
  createNewDropBoxAnswer,
} from "../../api/dropBoxApi";
import {
  pageBackgroundColor,
  cardBackgroundColor,
  cardTextColor,
} from "../../_appConfig/Theme";
export default function CreateOrAnswer({ navigation, route }) {
  const [dropBoxId, setDropBoxId] = useState(route.params.dropBoxId);
  const [dropBoxPassword, setDropBoxPassword] = useState("Hello");
  const [dropBoxAnswer, setDropBoxAnswer] = useState(null);
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: pageBackgroundColor,
        justifyContent: "center",
        minHeight: "100%",
      }}
    >
      <Card containerStyle={{ borderRadius: 10 }}>
        <Card.Title>Leave a Message </Card.Title>

        <Input
          label="Your Message"
          placeholder="Message Here"
          style={{}}
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
        <Divider style={{ backgroundColor: "#333", marginVertical: 50 }} />
        <Card.Title>Have the password?</Card.Title>
        <Card.Title>
          Find out what others left in your drop box below.
        </Card.Title>
        <Input
          label="Drop Box Password"
          placeholder="Password Here"
          onChangeText={(Text) => {
            setDropBoxPassword(Text);
          }}
        />
        <Button
          title="Check Drop Box"
          type="solid"
          buttonStyle={{}}
          onPress={async () => {
            if (dropBoxPassword != null && dropBoxPassword != undefined) {
              const valid = await checkIfDropBoxIdAndPasswordIsValid(
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
