import { Platform } from "react-native";
import { Linking } from "react-native";

export let sendNewDropBoxSmsNotification = async (
  dropBoxId,
  dropBoxName,
  dropBoxLocation
) => {
  const operator = Platform.select({ ios: "&", android: "?" });
  const smsIntro = `  Hello! I have created a anonymous drop box using the app "muter poll". 
  Just download the app and use the info in this message to share your thoughts or feelings anonymously. No account required.
     `;
  const smsBody = `your drop box id: ${dropBoxId}, your drop box name: ${dropBoxName}`;
  const url = `sms:${operator}body=${smsIntro + smsBody}`;
  Linking.openURL(url);
};
