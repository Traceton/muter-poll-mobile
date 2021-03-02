import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import {
  Button,
  Card,
  Input,
  Divider,
  ListItem,
  Tile,
} from "react-native-elements";
import {
  getDropBoxByIdAndPassword,
  getDropBoxAnswersByIdAndPassword,
  deleteDropBox,
} from "../../api/dropBoxApi";
import { sendNewDropBoxEmailNotification } from "../../api/email";
import { sendNewDropBoxSmsNotification } from "../../api/sms";
import {
  pageBackgroundColor,
  cardBackgroundColor,
  cardTextColor,
} from "../../_appConfig/Theme";

export default function ViewDropBox({ navigation, route }) {
  const { dropBoxId, dropBoxPassword } = route.params;
  const [dropBoxFromApi, setDropBoxFromApi] = useState(null);
  const [dropBoxAnswersFromApi, setDropBoxAnswersFromApi] = useState(null);
  useEffect(() => {
    let getDropBox = async () => {
      const dataFromApi = await getDropBoxByIdAndPassword(
        dropBoxId,
        dropBoxPassword
      );
      if (dataFromApi) {
        setDropBoxFromApi(dataFromApi);
      }
    };
    let getAnswers = async () => {
      const dataFromApi = await getDropBoxAnswersByIdAndPassword(
        dropBoxId,
        dropBoxPassword
      );
      if (dataFromApi) {
        await setDropBoxAnswersFromApi(dataFromApi);
      }
    };

    getDropBox();
    getAnswers();
  }, []);

  let displayedDropBox;

  if (dropBoxFromApi != null && dropBoxFromApi != undefined) {
    let dropBox = dropBoxFromApi;
    displayedDropBox = (
      <ScrollView>
        <Card
          containerStyle={{
            borderRadius: 10,
            justifyContent: "space-around",
          }}
        >
          <Card.Title style={{ fontSize: 25 }}>
            {dropBox.dropBoxName}
          </Card.Title>
          <Card.Title style={{ fontSize: 20 }}>{dropBox.dropBoxId}</Card.Title>
          <Button
            buttonStyle={{
              backgroundColor: "#333",
              marginVertical: 5,
            }}
            type="outline"
            title="Sms"
            onPress={async () => {
              sendNewDropBoxSmsNotification(
                dropBox.dropBoxId,
                dropBox.dropBoxName,
                dropBox.dropBoxLocation
              );
            }}
          />
          <Button
            buttonStyle={{ backgroundColor: "#333", marginVertical: 5 }}
            type="outline"
            title="Email"
            onPress={async () => {
              sendNewDropBoxEmailNotification(
                dropBox.dropBoxId,
                dropBox.dropBoxName,
                dropBox.dropBoxLocation
              );
            }}
          />
          <Button
            buttonStyle={{ backgroundColor: "red", marginVertical: 5 }}
            type="solid"
            title="Hold To Delete Drop Box"
            onLongPress={async () => {
              let deleted = await deleteDropBox(dropBoxId, dropBoxPassword);
              if (deleted) {
                navigation.navigate("Create Or Answer");
              }
            }}
          />
        </Card>
      </ScrollView>
    );
  } else {
    displayedDropBox = <Text> Sorry no drop box was found</Text>;
  }

  let displayedAnswers = [];
  if (
    dropBoxAnswersFromApi != null &&
    dropBoxAnswersFromApi != undefined &&
    dropBoxAnswersFromApi.length > 0
  ) {
    dropBoxAnswersFromApi.map((answer) => {
      displayedAnswers.push(
        <ScrollView key={answer.dropBoxAnswer}>
          <Card
            containerStyle={{
              backgroundColor: cardBackgroundColor,
              borderRadius: 10,
            }}
          >
            <Card.Title style={{ fontSize: 20 }}>
              {answer.dropBoxAnswer}
            </Card.Title>
            <Card.Title style={{ fontSize: 15 }}>{answer.createdOn}</Card.Title>
          </Card>
        </ScrollView>
      );
    });
  } else {
    displayedAnswers = (
      <ScrollView>
        <Card
          containerStyle={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 10,
          }}
        >
          <Card.Title style={{ fontSize: 20 }}>
            Nobody has answered this poll yet :)
          </Card.Title>
        </Card>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: pageBackgroundColor,
        minHeight: "100%",
      }}
    >
      <View>
        {displayedDropBox}
        <Divider
          style={{
            marginVertical: 30,
            marginHorizontal: 15,
            backgroundColor: "black",
          }}
        />
        {displayedAnswers}
      </View>
    </ScrollView>
  );
}
