export let createResponse = async (response) => {
  let finalResponse = {
    messageType: response.data.message_type || null,
    message: response.data.message || null,
    fullResponse: response || null,
  };
  if (finalResponse) {
    return finalResponse;
  } else {
    alert(`createResponseFailed`);
  }
};

export let createError = async (error) => {
  let finalError = {
    messageType: error.response.data.message_type || null,
    message: error.response.data.message || null,
    fullError: error,
  };
  if (finalError) {
    return finalError;
  } else {
    alert(`createErrorFailed`);
  }
};
