import { Comment } from "@/types/comment";
import api from "./api";
import { Post } from "@/types/post";

const ROOT = "/post";
const URLS = {
  CREATE: `${ROOT}`,
  GET_ALL: `${ROOT}`,
  TOGGLE_LIKE: `${ROOT}/:postId/toggle-like`,
  GET_COMMENTS: `${ROOT}/:postId/comments`,
  GET_BY_ID: `${ROOT}/:postId`,
  DELETE: `${ROOT}/:postId`,
};

export type CreatePostResponse = Post;
export type CreatePostRequest = {
  description: string;
  images?: File[];
};

export type GetAllPostResponse = {
  posts: Post[];
  nextCursor: string | null;
};

export type GetCommentsResponse = Comment[];

export const createPost = (data: CreatePostRequest) => {
  const { description, images } = data;
  const formData = new FormData();
  formData.append("description", description);
  if (images) {
    images.forEach((image) => formData.append("images", image));
  }
  return api.post<CreatePostResponse>(URLS.CREATE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getAllPost = (cursor: string | null, limit: number = 10) =>
  api.get<GetAllPostResponse>(URLS.GET_ALL, {
    params: {
      cursor,
      limit,
    },
  });

export const toggleLike = (postId: number) =>
  api.post<Post>(URLS.TOGGLE_LIKE.replace(":postId", postId.toString()));

export const getComments = (postId: number) =>
  api.get<GetCommentsResponse>(
    URLS.GET_COMMENTS.replace(":postId", postId.toString())
  );

export const getPost = (postId: number) =>
  api.get<Post>(URLS.GET_BY_ID.replace(":postId", postId.toString()));

export const deletePost = (postId: number) =>
  api.delete(URLS.DELETE.replace(":postId", postId.toString()));


