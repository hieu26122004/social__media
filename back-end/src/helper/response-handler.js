const returnError = (message) => {
  return {
    success: false,
    message,
  };
};

const returnSuccess = (message, data) => {
  return {
    success: true,
    message,
    data,
  };
};

module.exports = { returnError, returnSuccess };
