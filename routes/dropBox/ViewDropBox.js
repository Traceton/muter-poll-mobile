import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";

export default function ViewDropBox({ navigation, route }) {
  const { dropBoxId, dropBoxPassword } = route.params;

  return (
    <ScrollView>
      <Card>
        <Card.Title>
          Wiew Drop Box id--> {dropBoxId}, password --> {dropBoxPassword}{" "}
        </Card.Title>
      </Card>
    </ScrollView>
  );
}
