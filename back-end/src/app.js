const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const httpStatus = require("http-status");
const config = require("./config/config");
const routes = require("./routes");

const app = express();

if (config.env === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", routes);
app.all("*", (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    status: false,
    code: httpStatus.NOT_FOUND,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
