import { User } from "@/types/user";
import api from "./api";

const ROOT = "/user";

const URLS = {
  ME: `${ROOT}/me`,
  GET_NON_FOLLOWING: `${ROOT}/non-following`,
  GET_FOLLOWING: `${ROOT}/following`,
  GET_FOLLOWERS: `${ROOT}/followers`,
  TOGGLE_FOLLOW: `${ROOT}/:followedId/toggle-follow`,
};

export type LoadUserResponse = User;

export type GetNonFollowing = (User & {
  followerCount: number;
  followingCount: number;
  postCount: number;
})[];

export const loadUser = () => api.get<User>(URLS.ME);

export const getNonFollowing = () =>
  api.get<GetNonFollowing>(URLS.GET_NON_FOLLOWING);

export const toggleFollow = (followedId: string) =>
  api.post<boolean>(URLS.TOGGLE_FOLLOW.replace(":followedId", followedId));

export const getFollowing = () => api.get<GetNonFollowing>(URLS.GET_FOLLOWING);

export const getFollowers = () => api.get<GetNonFollowing>(URLS.GET_FOLLOWERS);
