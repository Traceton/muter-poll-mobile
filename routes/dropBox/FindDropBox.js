import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import {
  pageBackgroundColor,
  cardBackgroundColor,
  cardTextColor,
} from "../../_appConfig/Theme";
import {
  getDropBoxIfValid,
  checkIfDropBoxIdAndPasswordIsValid,
  createNewDropBoxAnswer,
} from "../../api/dropBoxApi";
import { alertHandler } from "../../services/alertService";

// 53987
export default function FindDropBox({ navigation, route }) {
  const { requiresPassword } = route.params;
  const [dropBoxId, setDropBoxId] = useState(null);
  const [dropBoxPassword, setDropBoxPassword] = useState(null);
  const [message, setMessage] = useState(<Text></Text>);

  let findDropBoxForm;
  if (requiresPassword) {
    findDropBoxForm = (
      <Card
        containerStyle={{ justifyContent: "space-around", minHeight: "95%" }}
      >
        <Card.Title style={{ fontWeight: "200", fontSize: 35 }}>
          Please enter your drop box code below.
        </Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 35 }}>
          {message}
        </Card.Title>
        <Input
          // label="Drop Box Code"
          placeholder="Drop Box Code here"
          style={{ marginVertical: 10 }}
          onChangeText={(Text) => {
            setDropBoxId(Text);
          }}
        />
        <Input
          placeholder="Drop Box Password Here"
          onChangeText={(Text) => {
            setDropBoxPassword(Text);
          }}
        />
        <Button
          titleStyle={{ fontWeight: "200", fontSize: 30 }}
          buttonStyle={{ marginVertical: 10 }}
          type="solid"
          title="Find drop box"
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
              } else if (res.messageType !== "success") {
                alertHandler(res);
              }
            } else {
              alert("Drop Box Id And Password Required");
            }
          }}
        />
      </Card>
    );
  } else if (!requiresPassword) {
    findDropBoxForm = (
      <Card
        containerStyle={{ justifyContent: "space-around", minHeight: "95%" }}
      >
        <Card.Title style={{ fontWeight: "200", fontSize: 35 }}>
          Please enter your drop box code below.
        </Card.Title>
        <Input
          label="Drop Box Code"
          placeholder="Drop Box Code here"
          style={{ marginVertical: 10 }}
          onChangeText={(Text) => {
            setDropBoxId(Text);
          }}
        />
        <Button
          titleStyle={{ fontWeight: "200", fontSize: 30 }}
          buttonStyle={{ marginVertical: 10 }}
          type="solid"
          title="Find drop box"
          onPress={async () => {
            if (dropBoxId != null && dropBoxId != undefined) {
              let res = await getDropBoxIfValid(dropBoxId);
              if (res.messageType === "success") {
                navigation.navigate("Answer Drop Box", {
                  publicDropBoxInfo: res.fullResponse.data.publicDropBoxInfo,
                });
              } else if (res.messageType !== "success") {
                alertHandler(res);
              }
            } else {
              alert("Drop Box Code Required");
            }
          }}
        />
      </Card>
    );
  }

  return <ScrollView>{findDropBoxForm}</ScrollView>;
}
