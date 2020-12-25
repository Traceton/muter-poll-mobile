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
    }).then((response) => {
      //   console.log(response);
      //   return response.json();
      return true;
    });
  } catch (error) {
    return false;
  }
};

export let createNewDropBoxAnswer = async (dropBoxId, dropBoxAnswer) => {
  const newBoxAnswer = {
    dropBoxId: dropBoxId,
    dropBoxAnswer: dropBoxAnswer,
  };
  try {
    return await fetch(`${API}/dropBox/createNewDropBoxAnswer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBoxAnswer),
    }).then((response) => {
      //   console.log(response);
      //   return response.json();
      return true;
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};
