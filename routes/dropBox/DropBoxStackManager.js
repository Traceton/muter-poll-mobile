import React from "react";
import { ScrollView, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateOrAnswer from "./CreateOrAnswer";
import CheckIfPassword from "./CheckIfPassword";
import ViewDropBox from "./ViewDropBox";
import CreateDropBox from "./CreateDropBox";
import ScreenshotSuggestion from "./ScreenshotSuggestion";
import NewOrView from "./NewOrView";
import FindDropBox from "./FindDropBox";

const DropBoxStack = createStackNavigator();
export default function DropBoxStackManager() {
  return (
    <DropBoxStack.Navigator>
      <DropBoxStack.Screen name="New Or View" component={NewOrView} />
      <DropBoxStack.Screen name="Find Drop Box" component={FindDropBox} />
      <DropBoxStack.Screen name="Create Drop Box" component={CreateDropBox} />
      <DropBoxStack.Screen name="View Drop Box" component={ViewDropBox} />
      <DropBoxStack.Screen name="Save Info" component={ScreenshotSuggestion} />
    </DropBoxStack.Navigator>
  );
}

// new or view -> answer a drop box -> Once a correct code is entered
// the user should be able to see the drop boxed name and question also.
