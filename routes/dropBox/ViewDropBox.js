import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";
import { getDropBoxByIdAndPassword } from "../../api/dropBoxApi";

export default function ViewDropBox({ navigation, route }) {
  const { dropBoxId, dropBoxPassword } = route.params;

  useEffect(() => {
    getDropBoxByIdAndPassword();
  }, [getDropBoxByIdAndPassword]);

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
