import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { createNewDropBoxAnswer } from "../../api/dropBoxApi";
import { alertHandler } from "../../services/alertService";

export default function AnswerDropBox({ navigation, route }) {
  const { publicDropBoxInfo } = route.params;
  const [dropBoxAnswer, setDropBoxAnswer] = useState(null);
  return (
    <ScrollView
      contentContainerStyle={{
        minHeight: "100%",
      }}
    >
      <Card
        containerStyle={{ justifyContent: "space-around", minHeight: "80%" }}
      >
        <Card.Title style={{ fontWeight: "200", fontSize: 30 }}>
          {publicDropBoxInfo.dropBoxId}
        </Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 30 }}>
          {publicDropBoxInfo.dropBoxName}
        </Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 30 }}>
          {publicDropBoxInfo.dropBoxQuestion}
        </Card.Title>
        <Input
          placeholder="Drop Box Answer here"
          style={{ marginVertical: 10 }}
          onChangeText={(Text) => {
            setDropBoxAnswer(Text);
          }}
        />
        <Button
          type="solid"
          title="Submit your reply."
          onPress={async () => {
            if (dropBoxAnswer) {
              let res = await createNewDropBoxAnswer(
                publicDropBoxInfo.dropBoxId,
                dropBoxAnswer
              );
              if (res && res.messageType === "success") {
                navigation.navigate("New Or View");
              } else if (res && res.messageType !== "success") {
                alertHandler(res);
              }
            } else {
              alert("Please fill all fields");
            }
          }}
        />
      </Card>
    </ScrollView>
  );
}
