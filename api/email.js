import { Platform } from "react-native";
import { Linking } from "react-native";

export let sendNewDropBoxEmailNotification = async (
  dropBoxId,
  dropBoxName,
  dropBoxLocation
) => {
  const operator = Platform.select({ ios: "&", android: "?" });
  const emailSubject = `Workplace Survey`;
  const emailIntro = `  Hello! I have created a anonymous drop box using the app "muter poll". 
  Just download the app and use the info in this email to share your thoughts or feelings anonymously. No account required.
     `;
  const emailBody = `Your drop box id: ${dropBoxId},
    your drop box name: ${dropBoxName}`;
  const url = `mailto:${operator}subject=${emailSubject}&body=${
    emailIntro + emailBody
  }`;
  Linking.openURL(url);
};
