const httpStatus = require("http-status");

const withAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((error) => {
      console.error("Error >>>>>>>> : ", error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        message: "An error occurred. Please try again later.",
        success: false,
      });
    });
  };
};

module.exports = withAsync;
