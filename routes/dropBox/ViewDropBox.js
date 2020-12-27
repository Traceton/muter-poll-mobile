import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import {
  getDropBoxByIdAndPassword,
  getDropBoxAnswersByIdAndPassword,
} from "../../api/dropBoxApi";
import { API } from "@env";

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
      <ScrollView>
        <Card>
          <Card.Title>name --> {dropBox.dropBoxName}</Card.Title>
          <Card.Title>id --> {dropBox.dropBoxId}</Card.Title>
          <Card.Title>password --> {dropBox.dropBoxPassword}</Card.Title>
        </Card>
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
          <Card>
            <Card.Title>{answer.dropBoxAnswer}</Card.Title>
          </Card>
        </ScrollView>
      );
    });
  } else {
    displayedAnswers = <Text></Text>;
  }

  return (
    <ScrollView>
      {displayedDropBox}
      {displayedAnswers}
    </ScrollView>
  );
}
