// currently included in the git ignore file.

const ENVIROMENT = "test";
const ATLAS = "https://react-store-node-api.herokuapp.com/workplaceSurveys";

import { Platform } from "react-native";

const localConfig = {
  server: Platform.select({
    ios: "127.0.0.1", // or 'localhost'
    android: "10.0.2.2",
  }),
};
export let API;
if (ENVIROMENT === "production") {
  API = ATLAS;
  console.log("running in production mode!");
} else if (ENVIROMENT === "test") {
  API = ATLAS;
  // console.log("running in test mode!");
} else if (ENVIROMENT === "development") {
  API = `http://${localConfig.server}:3001/workplaceSurveys`;
}
// add a test to determine if the api is connected correctly.
