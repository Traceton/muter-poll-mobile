import { API } from "@env";
import { Platform } from "react-native";
import { Linking } from "react-native";

export let sendNewDropBoxSmsNotification = async (
  dropBoxId,
  dropBoxName,
  dropBoxLocation
) => {
  const operator = Platform.select({ ios: "&", android: "?" });
  const smsBody = `your drop box id: ${dropBoxId}, your drop box name: ${dropBoxName}`;
  const url = `sms:${operator}body=${smsBody}`;
  Linking.openURL(url);
};
