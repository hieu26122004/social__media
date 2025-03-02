import { User } from "./user";

export type Image = {
  uuid: string;
  url: string;
  postId: string;
  post?: Post;
  userId: string;
  user?: User;
  createdAt: string;
  updatedAt: string;
};

export type Post = {
  id: number;
  description: string;
  userId: string;
  author: User;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  images?: Image[];
  createdAt: string;
  updatedAt: string;
};
