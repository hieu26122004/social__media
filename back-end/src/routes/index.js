const express = require("express");
const authRouter = require("./auth");
const postRouter = require("./post");
const commentRouter = require("./comment");
const userRouter = require("./user");

const router = express.Router();

const routes = [
  {
    path: "/auth",
    router: authRouter,
  },
  {
    path: "/post",
    router: postRouter,
  },
  {
    path: "/comment",
    router: commentRouter,
  },
  {
    path: "/user",
    router: userRouter,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.router);
});

module.exports = router;
