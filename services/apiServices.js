export let createResponse = async (response) => {
  if (response) {
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
  } else {
    alert("no response in create response");
  }
};

export let createError = async (error) => {
  if (error) {
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
  } else {
    alert("no error in create error");
  }
};
