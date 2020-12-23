import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackManager from "./routes/home/HomeStackManager";
import TakeSurveyStackManager from "./routes/takeSurvey/TakeSurveyStackManager";
import CreateSurveyStackManager from "./routes/createSurvey/CreateSurveyStackManager";
const AppTab = createBottomTabNavigator();

export default function App() {
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
        <AppTab.Screen name="Take Survey" component={TakeSurveyStackManager} />
        <AppTab.Screen
          name="Create Survey"
          component={CreateSurveyStackManager}
        />
      </AppTab.Navigator>
    </NavigationContainer>
  );
}
