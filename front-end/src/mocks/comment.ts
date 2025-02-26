import { Comment } from "@/types/comment";
import { USERS } from "./user";

export const COMMENTS: Comment[] = [
  {
    uuid: "123abc",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
    author: USERS.find((user) => user.uuid === "user1")!,
    userId: "user1",
    postId: 1,
    createdAt: "2021-03-29T10:38:53.000Z",
    updatedAt: "2021-03-29T10:38:53.000Z",
  },
  {
    uuid: "14109yf",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt.",
    author: USERS.find((user) => user.uuid === "user1")!,
    userId: "user1",
    postId: 1,
    createdAt: "2021-03-29T10:38:53.000Z",
    updatedAt: "2021-03-29T10:38:53.000Z",
  },
  {
    uuid: "jr1010j",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.",
    author: USERS.find((user) => user.uuid === "user2")!,
    userId: "user2",
    postId: 3,
    createdAt: "2021-03-29T10:38:53.000Z",
    updatedAt: "2021-03-29T10:38:53.000Z",
  },
  {
    uuid: "9kl23op",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: USERS.find((user) => user.uuid === "user3")!,
    userId: "user3",
    postId: 2,
    createdAt: "2021-04-01T12:00:00.000Z",
    updatedAt: "2021-04-01T12:00:00.000Z",
  },
  {
    uuid: "67ty98q",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: USERS.find((user) => user.uuid === "user3")!,
    userId: "user3",
    postId: 2,
    createdAt: "2021-04-02T09:15:30.000Z",
    updatedAt: "2021-04-02T09:15:30.000Z",
  },
  {
    uuid: "xzt45lm",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: USERS.find((user) => user.uuid === "user1")!,
    userId: "user1",
    postId: 1,
    createdAt: "2021-04-03T08:20:10.000Z",
    updatedAt: "2021-04-03T08:20:10.000Z",
  },
  {
    uuid: "poi98mn",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: USERS.find((user) => user.uuid === "user2")!,
    userId: "user2",
    postId: 2,
    createdAt: "2021-04-04T14:45:22.000Z",
    updatedAt: "2021-04-04T14:45:22.000Z",
  },
];
