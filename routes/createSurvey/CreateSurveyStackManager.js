import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateSurvey from "./CreateSurvey";
const CreateSurveyStack = createStackNavigator();

export default function HomeStackManager() {
  return (
    <CreateSurveyStack.Navigator>
      <CreateSurveyStack.Screen name="Create Survey" component={CreateSurvey} />
    </CreateSurveyStack.Navigator>
  );
}
