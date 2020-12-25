import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { Button, Card, Input, Divider } from "react-native-elements";

export default function ViewDropBox({ navigation }) {
  return (
    <ScrollView>
      <Card>
        <Card.Title>Thanks for your answer!</Card.Title>
        <Button type="solid" title="Return Home" />
      </Card>
    </ScrollView>
  );
}
