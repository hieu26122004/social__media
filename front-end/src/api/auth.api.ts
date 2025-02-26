import api from "./api";
import { User } from "@/types/user";

const ROOT = "/auth";
const URLS = {
  LOGIN: `${ROOT}/login`,
  REGISTER: `${ROOT}/register`,
  LOGOUT: `${ROOT}/logout`,
};

export type LoginResponse = User;
export type LoginRequest = {
  email: string;
  password: string;
};
export type RegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const login = (data: LoginRequest) =>
  api.post<LoginResponse>(URLS.LOGIN, data);

export const register = (data: RegisterRequest) =>
  api.post<LoginResponse>(URLS.REGISTER, data);
