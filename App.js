import { API } from "./_appConfig/ApiConfig";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackManager from "./routes/home/HomeStackManager";
import TakeSurveyStackManager from "./routes/takeSurvey/TakeSurveyStackManager";
import CreateSurveyStackManager from "./routes/createSurvey/CreateSurveyStackManager";
import DropBoxStackManager from "./routes/dropBox/DropBoxStackManager";
const AppTab = createBottomTabNavigator();

// box creator a way to email anyone a link to leave a message for the dropBox.

export default function App() {
  // console.log(`api at app.js -> ${API}`); //un-comment this to check current api.
  return (
    <NavigationContainer>
      <AppTab.Navigator
        tabBarOptions={{
          activeBackgroundColor: "#3B82F6",
          style: {
            backgroundColor: "#333",
          },
          labelStyle: { color: "white", marginBottom: 15, fontSize: 15 },
        }}
      >
        <AppTab.Screen name="Home" component={HomeStackManager} />
        <AppTab.Screen name="Silent Poll" component={DropBoxStackManager} />
        {/* <AppTab.Screen name="Take Survey" component={TakeSurveyStackManager} />
        <AppTab.Screen
          name="Create Survey"
          component={CreateSurveyStackManager}
        /> */}
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
