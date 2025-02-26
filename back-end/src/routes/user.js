const express = require("express");
const authentication = require("../middlewares/authentication");
const userController = require("../controllers/user");

const router = express.Router();

router.get("/me", authentication, userController.getMe);

router.get("/unfollowed", authentication, userController.getUnfollowedUsers);

module.exports = router;
