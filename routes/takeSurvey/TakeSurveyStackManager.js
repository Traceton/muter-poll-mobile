import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EnterSurveyCode from "./EnterSurveyCode";

const TakeSurveyStack = createStackNavigator();

export default function TakeSurveyStackManager() {
  return (
    <TakeSurveyStack.Navigator>
      <TakeSurveyStack.Screen
        name="Enter Survey Code"
        component={EnterSurveyCode}
      />
    </TakeSurveyStack.Navigator>
  );
}
