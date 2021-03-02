import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import {
  pageBackgroundColor,
  cardBackgroundColor,
  cardTextColor,
} from "../../_appConfig/Theme";

export default function ScreenshotSuggestion({ navigation, route }) {
  const { dropBox } = route.params;
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: pageBackgroundColor,
        minHeight: "100%",
      }}
    >
      <Card
        containerStyle={{
          borderRadius: 10,
          justifyContent: "space-around",
        }}
      >
        <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
          Please screenshot this page so you do not lose your drop box
          information.
        </Card.Title>
        <Card.Title style={{ fontSize: 30 }}>Drop Box Id</Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
          {dropBox.dropBoxId}
        </Card.Title>
        <Card.Title style={{ fontSize: 30 }}>Drop Box Name</Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
          {dropBox.dropBoxName}
        </Card.Title>
        <Card.Title style={{ fontSize: 30 }}>Drop Box Question</Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
          {dropBox.dropBoxQuestion}
        </Card.Title>
        <Card.Title style={{ fontSize: 30 }}>Drop Box Password</Card.Title>
        <Card.Title style={{ fontWeight: "200", fontSize: 25 }}>
          {dropBox.dropBoxPassword}
        </Card.Title>
      </Card>
    </ScrollView>
  );
}
