const express = require("express");
const authController = require("../controllers/auth");
const authValidator = require("../validators/user");

const router = express.Router();

router.post(
  "/register",
  authValidator.createValidator,
  authController.register
);

router.post("/login", authValidator.loginValidator, authController.login);

router.post("/logout", authController.logout);

module.exports = router;
