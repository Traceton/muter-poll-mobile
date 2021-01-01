import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider, ListItem } from "react-native-elements";
import {
  getDropBoxByIdAndPassword,
  getDropBoxAnswersByIdAndPassword,
} from "../../api/dropBoxApi";
import { API } from "@env";
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
      setDropBoxFromApi(dataFromApi);
      console.log(dataFromApi);
    };
    let getAnswers = async () => {
      const dataFromApi = await getDropBoxAnswersByIdAndPassword(
        dropBoxId,
        dropBoxPassword
      );
      setDropBoxAnswersFromApi(dataFromApi);
      console.log(dataFromApi);
    };

    getDropBox();
    getAnswers();
  }, []);

  let displayedDropBox;

  if (dropBoxFromApi) {
    let dropBox = dropBoxFromApi;
    displayedDropBox = (
      <ScrollView
        contentContainerStyle={{
          marginVertical: 20,
          // height: "50%",
          // justifyContent: "center",
          // alignContent: "center",
          // alignItems: "center",
        }}
      >
        <Card
          containerStyle={{
            backgroundColor: cardBackgroundColor,
            borderRadius: 10,
          }}
        >
          <Card.Title style={{ color: cardTextColor }}>
            Drop Box Name
          </Card.Title>
          <Card.Title style={{ color: cardTextColor }}>
            {dropBox.dropBoxName}
          </Card.Title>
          <Card.Title style={{ color: cardTextColor }}>Drop Box Id</Card.Title>
          <Card.Title style={{ color: cardTextColor }}>
            {dropBox.dropBoxId}
          </Card.Title>
          <Card.Title style={{ color: cardTextColor }}>
            Drop Box Password
          </Card.Title>
          <Card.Title style={{ color: cardTextColor }}>
            {dropBox.dropBoxPassword}
          </Card.Title>
        </Card>

        {/* <Text style={{ color: cardTextColor, fontSize: 30 }}>
          Drop Box Name
        </Text>
        <Text style={{ color: cardTextColor, fontSize: 20 }}>
          {dropBox.dropBoxName}
        </Text>
        <Text style={{ color: cardTextColor, fontSize: 30 }}>
          Drop Box Code
        </Text>
        <Text style={{ color: cardTextColor, fontSize: 20 }}>
          {dropBox.dropBoxId}
        </Text>
        <Text style={{ color: cardTextColor }}></Text>
        <Text style={{ color: cardTextColor }}></Text> */}
      </ScrollView>
    );
  } else {
    displayedDropBox = <Text></Text>;
  }

  let displayedAnswers = [];
  if (dropBoxAnswersFromApi) {
    dropBoxAnswersFromApi.map((answer) => {
      displayedAnswers.push(
        <ScrollView key={answer.dropBoxAnswer}>
          {/* <Card
            containerStyle={{
              backgroundColor: cardBackgroundColor,
              borderRadius: 10,
            }}
          >
            <Card.Title style={{ color: cardTextColor }}>
              {" "}
              {answer.dropBoxAnswer}
            </Card.Title>
          </Card> */}
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title style={{ textAlign: "center" }}>
                {answer.dropBoxAnswer}
              </ListItem.Title>
              <ListItem.Subtitle>{answer.createdOn}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </ScrollView>
      );
    });
  } else {
    displayedAnswers = <Text></Text>;
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
        {displayedAnswers}
      </View>
    </ScrollView>
  );
}
