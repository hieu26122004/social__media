import { User } from "@/types/user";
import api from "./api";

const ROOT = "/user";

const URLS = {
  ME: `${ROOT}/me`,
  UNFOLLOWED: `${ROOT}/unfollowed`,
};

export type LoadUserResponse = User;

export const loadUser = () => api.get<User>(URLS.ME);

export const getUnfollowedUsers = () => api.get<User[]>(URLS.UNFOLLOWED);
