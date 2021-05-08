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
  const { publicDropBoxInfo } = route.params;
  const [dropBoxId, setDropBoxId] = useState(publicDropBoxInfo.dropBoxId);
  const [dropBoxPassword, setDropBoxPassword] = useState(null);
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
        <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
          Drop Box Id
        </Card.Title>
        <Card.Title style={{ fontSize: 20 }}>
          {publicDropBoxInfo.dropBoxId}
        </Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
          Drop Box Name
        </Card.Title>
        <Card.Title style={{ fontSize: 20 }}>
          {publicDropBoxInfo.dropBoxName}
        </Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
          Drop Box Question
        </Card.Title>
        <Card.Title style={{ fontSize: 20 }}>
          {publicDropBoxInfo.dropBoxQuestion}
        </Card.Title>
        <Divider style={{ backgroundColor: "#333", marginVertical: 20 }} />
        <View style={{ marginVertical: 10 }}>
          <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
            Leave a Message Below{" "}
          </Card.Title>
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
              let res = await createNewDropBoxAnswer(dropBoxId, dropBoxAnswer);
              if (res.messageType === "success") {
                alert("thanks for your message!");
                navigation.navigate("Create Or Answer");
              }
            }}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
            Have the password?
          </Card.Title>
          <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
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
                const res = await checkIfDropBoxIdAndPasswordIsValid(
                  dropBoxId,
                  dropBoxPassword
                );
                if (res.messageType === "success") {
                  navigation.navigate("View Drop Box", {
                    dropBoxId: dropBoxId,
                    dropBoxPassword: dropBoxPassword,
                  });
                } else {
                  // console.log(isValid);
                  alert("something went wrong, please try again soon :)");
                }
              } else {
                alert("Drop Box Id And Password Required");
              }
            }}
          />
        </View>
      </Card>
    </ScrollView>
  );
}
