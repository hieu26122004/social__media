import { User } from "@/types/user";
import api from "./api";
import { Image, Post } from "@/types/post";

const ROOT = "/user";

const URLS = {
  ME: `${ROOT}/me`,
  GET_NON_FOLLOWING: `${ROOT}/non-following`,
  GET_FOLLOWING: `${ROOT}/:userId/following`,
  GET_FOLLOWERS: `${ROOT}/followers`,
  TOGGLE_FOLLOW: `${ROOT}/:followedId/toggle-follow`,
  GET_USER: `${ROOT}/:userId`,
  GET_USER_IMAGES: `${ROOT}/:userId/images`,
  GET_USER_POSTS: `${ROOT}/:userId/posts`,
  UPDATE_IMAGES: `${ROOT}/me/images`,
};

export type LoadUserResponse = User;

export type GetNonFollowing = (User & {
  followerCount: number;
  followingCount: number;
  postCount: number;
})[];

export type GetUserResponse = User & {
  followerCount: number;
};

export type UpdateImagesRequest = {
  coverPicture?: File;
  profilePicture?: File;
};

export const loadUser = () => api.get<User>(URLS.ME);

export const getNonFollowing = () =>
  api.get<GetNonFollowing>(URLS.GET_NON_FOLLOWING);

export const toggleFollow = (followedId: string) =>
  api.post<boolean>(URLS.TOGGLE_FOLLOW.replace(":followedId", followedId));

export const getFollowing = (userId?: string) =>
  api.get<GetNonFollowing>(
    userId
      ? URLS.GET_FOLLOWING.replace(":userId", userId)
      : URLS.GET_FOLLOWING.replace(":userId", "")
  );

export const getFollowers = () => api.get<GetNonFollowing>(URLS.GET_FOLLOWERS);

export const getUser = (userId: string) =>
  api.get<GetUserResponse>(URLS.GET_USER.replace(":userId", userId));

export const getUserImage = (userId: string) =>
  api.get<Image[]>(URLS.GET_USER_IMAGES.replace(":userId", userId));

export const getUserPosts = (userId: string) =>
  api.get<Post[]>(URLS.GET_USER_POSTS.replace(":userId", userId));

export const updateMe = (data: Partial<User>) => api.put<User>(URLS.ME, data);

export const updateImages = (data: UpdateImagesRequest) => {
  const { coverPicture, profilePicture } = data;

  const formData = new FormData();
  if (coverPicture) {
    formData.append("coverPicture", coverPicture);
  }
  if (profilePicture) {
    formData.append("profilePicture", profilePicture);
  }

  return api.put<User>(URLS.UPDATE_IMAGES, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
