import { API } from "@env";

export let checkIfDropBoxIdIsValid = async (dropBoxId) => {
  return true;
};

export let checkIfDropBoxIdAndPasswordIsValid = async (
  dropBoxId,
  dropBoxPassword
) => {
  return true;
};

export let createNewDropBox = async (
  dropBoxId,
  dropBoxName,
  dropBoxPassword,
  dropBoxLocation
) => {
  const newBox = {
    dropBoxId: dropBoxId,
    dropBoxName: dropBoxName,
    dropBoxPassword: dropBoxPassword,
    dropBoxLocation: dropBoxLocation,
  };

  try {
    return await fetch(`${API}/dropBox/createNewDropBox`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBox),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return true;
      });
  } catch (error) {
    return false;
  }
};
