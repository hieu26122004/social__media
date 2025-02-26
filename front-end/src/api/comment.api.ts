import api from "./api";
import { Comment } from "@/types/comment";

const ROOT = "/comment";
const URLS = {
  CREATE: `${ROOT}`,
};

export type CreateCommentResponse = Comment;
export type CreateCommentRequest = {
  postId: number;
  content: string;
};
export const createComment = (data: CreateCommentRequest) =>
  api.post<CreateCommentResponse>(URLS.CREATE, data);
