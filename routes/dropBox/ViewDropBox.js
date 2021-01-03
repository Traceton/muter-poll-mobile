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
        contentContainerStyle={
          {
            // marginVertical: 20,
            // height: "50%",
            // justifyContent: "center",
            // alignContent: "center",
            // alignItems: "center",
          }
        }
      >
        {/* <Tile
          imageSrc={{
            uri:
              "https://images.unsplash.com/photo-1608311820732-36092cc3470a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=582&q=80",
          }}
          title={dropBox.dropBoxName}
          titleStyle={{ fontSize: 35 }}
          activeOpacity={10}
          height={500}
          featured
          caption={dropBox.dropBoxId}
          captionStyle={{ fontSize: 20 }}
        /> */}
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
            buttonStyle={{ backgroundColor: "red" }}
            type="solid"
            title="Delete Drop Box"
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
    displayedDropBox = <Text></Text>;
  }

  let displayedAnswers = [];
  if (dropBoxAnswersFromApi) {
    dropBoxAnswersFromApi.map((answer) => {
      displayedAnswers.push(
        <ScrollView key={answer.dropBoxAnswer}>
          <ListItem
            containerStyle={{ backgroundColor: pageBackgroundColor }}
            bottomDivider
          >
            <ListItem.Content>
              <ListItem.Title style={{ color: "white" }}>
                {answer.dropBoxAnswer}
              </ListItem.Title>
              <ListItem.Subtitle style={{ color: "white" }}>
                {answer.createdOn}
              </ListItem.Subtitle>
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
