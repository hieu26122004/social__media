import { Post } from "./post";
import { User } from "./user";

export type Comment = {
  uuid: string;
  content: string;
  postId: number;
  post?: Post;
  userId: string;
  author: User;
  createdAt: string;
  updatedAt: string;
};
