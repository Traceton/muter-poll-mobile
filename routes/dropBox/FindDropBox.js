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
export default function FindDropBox({ navigation, route }) {
  const { requiresPassword } = route.params;
  const [dropBoxId, setDropBoxId] = useState(null);
  const [dropBoxPassword, setDropBoxPassword] = useState(null);

  let findDropBoxForm;
  if (requiresPassword) {
    findDropBoxForm = (
      <Card
        containerStyle={{ justifyContent: "space-around", minHeight: "95%" }}
      >
        <Card.Title style={{ fontWeight: "200", fontSize: 35 }}>
          Please enter your drop box code below.
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
              const isValid = await checkIfDropBoxIdAndPasswordIsValid(
                dropBoxId,
                dropBoxPassword
              );
              if (isValid === true) {
                navigation.navigate("View Drop Box", {
                  dropBoxId: dropBoxId,
                  dropBoxPassword: dropBoxPassword,
                });
              } else if (isValid === false) {
                alert("Password is incorrect.");
              } else {
                // console.log(isValid);
                alert("something went wrong, please try again soon :)");
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
              let publicDropBoxInfo = await getDropBoxIfValid(dropBoxId);
              if (publicDropBoxInfo) {
                navigation.navigate("Answer Drop Box", {
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
      </Card>
    );
  }

  return <ScrollView>{findDropBoxForm}</ScrollView>;
}