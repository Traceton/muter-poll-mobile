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
  const newBox = await {
    dropBoxId: dropBoxId,
    dropBoxName: dropBoxName,
    dropBoxQuestion: dropBoxQuestion,
    dropBoxPassword: dropBoxPassword,
    dropBoxLocation: dropBoxLocation,
  };

  let finalResponse;
  let finalError;

  fetch(`${API}/dropBox/createNewDropBox`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBox),
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
  const newBox = await {
    to: to,
    subject: "New Muter Poll drop box",
    text: text,
  };
  let finalResponse;
  let finalError;

  await fetch(`${API}/dropBox/sendUserDropBoxEmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBox),
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

  return await fetch(
    `${API}/dropBox/deleteDropBox/${dropBoxId}/${dropBoxPassword}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
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
