import { API } from "../_appConfig/ApiConfig";

// Get the basic drop box info if one exists. (code, name, and question only.)
export let getDropBoxIfValid = async (dropBoxId) => {
  let publicDropBoxInfo;
  try {
    await fetch(`${API}/dropBox/getDropBoxIfValid/${dropBoxId}`)
      .then((response) => response.json())
      .then((data) => (publicDropBoxInfo = data));
    if (publicDropBoxInfo != null) {
      return publicDropBoxInfo;
    } else if (publicDropBoxInfo === false) {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export let checkIfDropBoxIdAndPasswordIsValid = async (
  dropBoxId,
  dropBoxPassword
) => {
  let isValid;
  try {
    await fetch(
      `${API}/dropBox/checkIfDropBoxIdAndPasswordIsValid/${dropBoxId}/${dropBoxPassword}`
    )
      .then((response) => response.json())
      .then((data) => (isValid = data));
    if (isValid === true) {
      return true;
    } else if (isValid === false) {
      return false;
    } else {
      console.log(isValid);
    }
  } catch (error) {
    return false;
  }
};

export let createNewDropBox = async (
  dropBoxId,
  dropBoxName,
  dropBoxQuestion,
  dropBoxPassword,
  dropBoxLocation
) => {
  const newBox = await {
    dropBoxId: dropBoxId,
    dropBoxName: dropBoxName,
    dropBoxQuestion: dropBoxQuestion,
    dropBoxPassword: dropBoxPassword,
    dropBoxLocation: dropBoxLocation,
  };
  try {
    await fetch(`${API}/dropBox/createNewDropBox`, {
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

export let getDropBoxByIdAndPassword = async (dropBoxId, dropBoxPassword) => {
  let dataFromApi;
  try {
    await fetch(
      `${API}/dropBox/getDropBoxByIdAndPassword/${dropBoxId}/${dropBoxPassword}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => (dataFromApi = data));
    if (dataFromApi != null) {
      // console.log("drop box found");
    }
    return dataFromApi;
  } catch (error) {
    // console.log(dataFromApi); returning undefines here
    return false;
  }
};

export let getDropBoxAnswersByIdAndPassword = async (
  dropBoxId,
  dropBoxPassword
) => {
  let dataFromApi;
  try {
    await fetch(
      `${API}/dropBox/getAnswersByIdAndPassword/${dropBoxId}/${dropBoxPassword}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => (dataFromApi = data));
    return dataFromApi;
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
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export let deleteDropBox = async (dropBoxId, dropBoxPassword) => {
  try {
    return await fetch(
      `${API}/dropBox/deleteDropBox/${dropBoxId}/${dropBoxPassword}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      //   console.log(response);
      //   return response.json();
      return true;
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};
