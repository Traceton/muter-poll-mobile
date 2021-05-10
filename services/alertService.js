import { Alert } from "react-native";
export let alertHandler = async (res) => {
  let messageType = res.messageType;
  let message = res.message;
  if (messageType !== "success") {
    if (messageType === "warning") {
      return Alert.alert("Oops...", message);
    } else if (messageType === "error") {
      return Alert.alert(
        "Sorry about that, ",
        "There was a problem, Please try again."
      );
    }
  }
};
