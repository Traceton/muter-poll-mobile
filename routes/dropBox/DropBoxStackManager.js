import React from "react";
import { ScrollView, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateOrAnswer from "./CreateOrAnswer";
import CheckIfPassword from "./CheckIfPassword";
import ViewDropBox from "./ViewDropBox";

const DropBoxStack = createStackNavigator();
export default function DropBoxStackManager() {
  return (
    <DropBoxStack.Navigator>
      <DropBoxStack.Screen name="Create Or Answer" component={CreateOrAnswer} />
      <DropBoxStack.Screen
        name="Check If Password"
        component={CheckIfPassword}
      />
      <DropBoxStack.Screen name="View Drop Box" component={ViewDropBox} />
    </DropBoxStack.Navigator>
  );
}
