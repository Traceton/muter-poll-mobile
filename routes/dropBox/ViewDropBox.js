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
import { alertHandler } from "../../services/alertService";
import { Alert } from "react-native";

export default function ViewDropBox({ navigation, route }) {
  const { dropBoxId, dropBoxPassword } = route.params;
  const [dropBoxFromApi, setDropBoxFromApi] = useState(null);
  const [dropBoxAnswersFromApi, setDropBoxAnswersFromApi] = useState(null);
  useEffect(() => {
    let getDropBox = async () => {
      const res = await getDropBoxByIdAndPassword(dropBoxId, dropBoxPassword);
      if (res.messageType === "success") {
        setDropBoxFromApi(res.fullResponse.data.dropBox);
      } else {
        alertHandler(res);
      }
    };
    let getAnswers = async () => {
      const res = await getDropBoxAnswersByIdAndPassword(
        dropBoxId,
        dropBoxPassword
      );
      if (res.messageType === "success") {
        setDropBoxAnswersFromApi(res.fullResponse.data.answers);
      } else {
        alertHandler(res);
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
            justifyContent: "space-around",
          }}
        >
          <Card.Title style={{ fontWeight: "200", fontSize: 30 }}>
            {dropBox.dropBoxName}
          </Card.Title>
          <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
            {dropBox.dropBoxId}
          </Card.Title>
          <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
            {dropBox.dropBoxQuestion}
          </Card.Title>

          <Button
            buttonStyle={{
              marginVertical: 5,
            }}
            type="outline"
            title="Share Drop Box"
            onPress={() => {
              // navigation.navigate("Save Info", {
              //   dropBox: dropBox,
              // });

              Alert.alert(
                "Share Drop Box",
                "Please choose a method of sharing.",
                [
                  {
                    text: "Text",
                    onPress: () =>
                      sendNewDropBoxSmsNotification(
                        dropBox.dropBoxId,
                        dropBox.dropBoxName,
                        dropBox.dropBoxLocation
                      ),
                  },
                  {
                    text: "Email",
                    onPress: () =>
                      sendNewDropBoxEmailNotification(
                        dropBox.dropBoxId,
                        dropBox.dropBoxName,
                        dropBox.dropBoxLocation
                      ),
                  },
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                ],
                {
                  cancelable: true,
                }
              );
            }}
          />
          <Button
            buttonStyle={{ backgroundColor: "red", marginVertical: 5 }}
            type="solid"
            title="Hold To Delete Drop Box"
            onLongPress={async () => {
              let res = await deleteDropBox(dropBoxId, dropBoxPassword);
              if (res.messageType === "success") {
                navigation.navigate("Create Or Answer");
              } else {
                alertHandler(res);
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
    // answers should not be displayed until at least 2 people have left messages.
    dropBoxAnswersFromApi.length >= 2
  ) {
    dropBoxAnswersFromApi.map((answer) => {
      displayedAnswers.push(
        <ScrollView key={answer.dropBoxAnswer}>
          <Card>
            <Card.Title style={{ fontWeight: "300", fontSize: 20 }}>
              {answer.dropBoxAnswer}
            </Card.Title>
          </Card>
        </ScrollView>
      );
    });
  } else {
    displayedAnswers = (
      <ScrollView>
        <Card>
          <Card.Title style={{ fontWeight: "200", fontSize: 20 }}>
            At least 2 people must answer before you can see their responses.
          </Card.Title>
        </Card>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{
        minHeight: "100%",
      }}
    >
      <View>
        {displayedDropBox}
        <Divider
          style={{
            marginVertical: 10,
            marginHorizontal: 15,
            backgroundColor: "black",
          }}
        />
        <ScrollView contentContainerStyle={{ marginVertical: 10 }}>
          {displayedAnswers}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
