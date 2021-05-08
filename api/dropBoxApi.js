import axios from "axios";
import { API } from "../_appConfig/ApiConfig";
import { createResponse, createError } from "../services/apiServices";

// Get the basic drop box info if one exists. (code, name, and question only.)
export let getDropBoxIfValid = async (dropBoxId) => {
  let finalResponse;
  let finalError;

  const basicRequest = await axios.create({
    timeout: 1000,
  });

  await basicRequest
    .get(`${API}/dropBox/getDropBoxIfValid/${dropBoxId}`)
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};

export let checkIfDropBoxIdAndPasswordIsValid = async (
  dropBoxId,
  dropBoxPassword
) => {
  let finalResponse;
  let finalError;

  const basicRequest = await axios.create({
    timeout: 1000,
  });

  await basicRequest
    .get(
      `${API}/dropBox/checkIfDropBoxIdAndPasswordIsValid/${dropBoxId}/${dropBoxPassword}`
    )
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};

export let createNewDropBox = async (
  userEmail,
  dropBoxId,
  dropBoxName,
  dropBoxQuestion,
  dropBoxPassword,
  dropBoxLocation
) => {
  const newBox = await JSON.stringify({
    dropBoxId: dropBoxId,
    dropBoxName: dropBoxName,
    dropBoxQuestion: dropBoxQuestion,
    dropBoxPassword: dropBoxPassword,
    dropBoxLocation: dropBoxLocation,
  });

  const headers = {
    "Content-Type": "application/json",
  };

  let finalResponse;
  let finalError;

  await axios
    .post(`${API}/dropBox/createNewDropBox`, newBox, {
      headers,
    })
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};

export let sendDropBoxConfirmationEmail = async (
  to,
  dropBoxId,
  dropBoxName,
  dropBoxQuestion,
  dropBoxPassword
) => {
  // to, subject, and text required
  let text = await `You have created a new drop box using Muter Poll.
   Your drop box id is ${dropBoxId}.
    Your drop box name is ${dropBoxName}.
     Your drop box question is "${dropBoxQuestion}?"
      Your drop box password is ${dropBoxPassword}`;

  const newBox = await JSON.stringify({
    to: to,
    subject: "New Muter Poll drop box",
    text: text,
  });

  let finalResponse;
  let finalError;

  await axios
    .post(`${API}/dropBox/sendUserDropBoxEmail`, newBox, {
      headers,
    })
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};

export let getDropBoxByIdAndPassword = async (dropBoxId, dropBoxPassword) => {
  let finalResponse;
  let finalError;

  const basicRequest = await axios.create({
    timeout: 1000,
  });

  await basicRequest
    .get(
      `${API}/dropBox/getDropBoxByIdAndPassword/${dropBoxId}/${dropBoxPassword}`
    )
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};

export let getDropBoxAnswersByIdAndPassword = async (
  dropBoxId,
  dropBoxPassword
) => {
  let finalResponse;
  let finalError;

  const basicRequest = await axios.create({
    timeout: 1000,
  });

  await basicRequest
    .get(
      `${API}/dropBox/getAnswersByIdAndPassword/${dropBoxId}/${dropBoxPassword}`
    )
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};

export let createNewDropBoxAnswer = async (dropBoxId, dropBoxAnswer) => {
  let finalResponse;
  let finalError;

  const newDropBoxAnswer = await JSON.stringify({
    dropBoxId: dropBoxId,
    dropBoxAnswer: dropBoxAnswer,
  });

  const headers = {
    "Content-Type": "application/json",
  };

  await axios
    .post(`${API}/dropBox/createNewDropBoxAnswer`, newDropBoxAnswer, {
      headers,
    })
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};

export let deleteDropBox = async (dropBoxId, dropBoxPassword) => {
  let finalResponse;
  let finalError;

  const headers = {
    "Content-Type": "application/json",
  };

  await axios
    .delete(`${API}/dropBox/deleteDropBox/${dropBoxId}/${dropBoxPassword}`, {
      headers,
    })
    .then(async (response) => {
      finalResponse = await createResponse(response);
    })
    .catch(async (error) => {
      finalError = await createError(error);
    });

  if (finalResponse) {
    return finalResponse;
  }
  if (finalError) {
    return finalError;
  }
};
