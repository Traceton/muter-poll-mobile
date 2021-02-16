import { API } from "@env";
import { Platform } from "react-native";
import { Linking } from "react-native";

export let sendNewDropBoxEmailNotification = async (
  dropBoxId,
  dropBoxName,
  dropBoxLocation
) => {
  const operator = Platform.select({ ios: "&", android: "?" });
  const emailSubject = `Workplace Survey`;
  const emailBody = `your drop box id: ${dropBoxId}, your drop box name: ${dropBoxName}`;
  const url = `mailto:${operator}subject=${emailSubject}&body=${emailBody}`;
  Linking.openURL(url);
};
