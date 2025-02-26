import { User } from "./user";

export type Image = {
  uuid: string;
  url: string;
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
