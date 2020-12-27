import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { getDropBoxByIdAndPassword } from "../../api/dropBoxApi";
import { API } from "@env";
export default function ViewDropBox({ navigation, route }) {
  const { dropBoxId, dropBoxPassword } = route.params;
  const [dropBoxFromApi, setDropBoxFromApi] = useState(null);
  useEffect(() => {
    let getData = async () => {
      const dataFromApi = await getDropBoxByIdAndPassword(
        dropBoxId,
        dropBoxPassword
      );
      setDropBoxFromApi(dataFromApi);
      console.log(dataFromApi);
    };
    getData();
  }, [dropBoxId, dropBoxPassword]);

  let displayedDropBox;

  if (dropBoxFromApi) {
    displayedDropBox = dropBoxFromApi;
  } else {
    displayedDropBox = "";
  }

  return (
    <ScrollView>
      <Card>
        <Card.Title>
          Wiew Drop Box id--> {dropBoxId}, password --> {dropBoxPassword}{" "}
        </Card.Title>
        <Text>{displayedDropBox.dropBoxName}</Text>
      </Card>
    </ScrollView>
  );
}
