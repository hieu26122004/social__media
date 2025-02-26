const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { env, jwt } = require("../config/config");
const { generateToken } = require("../helper/token");
const User = require("../models/index").User;
const withAsync = require("../helper/with-async");
const responseHandler = require("../helper/response-handler");

const register = withAsync(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  let user = await User.findOne({ where: { email } });

  if (user) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(responseHandler.returnError("Email already exists"));
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    uuid: uuidv4(),
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  user = user.toJSON();
  delete user.password;

  res
    .status(httpStatus.CREATED)
    .json(responseHandler.returnSuccess("User registered successfully", user));
});

const login = withAsync(async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ where: { email } });

  if (!user) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(responseHandler.returnError("User not found"));
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json(responseHandler.returnError("Invalid login credentials"));
  }

  user = user.toJSON();
  delete user.password;

  const token = generateToken(user, jwt.secret, "7d");
  sendCookies(res, "auth", 7 * 24 * 60 * 60 * 1000, token);

  res
    .status(httpStatus.OK)
    .json(responseHandler.returnSuccess("Login successful!", user));
});

const logout = withAsync(async (req, res) => {
  res.clearCookie("auth", {
    secure: env !== "development",
    httpOnly: true,
  });

  res
    .status(httpStatus.OK)
    .json(responseHandler.returnSuccess("Logout successful!"));
});

const sendCookies = (res, name, expires = 7 * 24 * 60 * 60 * 1000, token) => {
  if (token) {
    res.cookie(name, token, {
      secure: env !== "development",
      httpOnly: true,
      maxAge: expires,
    });
  }
};

module.exports = {
  register,
  login,
  logout,
};
