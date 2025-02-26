import { User } from "@/types/user";
import { CheckPermissionConfig, Roles } from "./permission.type";

const permissionCheckMethods = {
  "one-of": (roles: Roles) => (predicate: (role: string) => boolean) =>
    roles.some(predicate),
  "all-of": (roles: Roles) => (predicate: (role: string) => boolean) =>
    roles.every(predicate),
};

export const checkPermission = (
  user: User,
  roles: Roles,
  config: CheckPermissionConfig = {}
): boolean => {
  const { type = "one-of", entityOwnerId } = config;

  const checkMethod =
    permissionCheckMethods[type] || permissionCheckMethods["one-of"];
  const userRoles = user.roles ?? [];
  const hasRole = (role: string): boolean => {
    switch (role) {
      case "owner":
        return entityOwnerId
          ? String(user.uuid) === String(entityOwnerId)
          : false;
      case "logged-in":
        return Boolean(user);
      default:
        return userRoles.includes(role);
    }
  };

  return checkMethod(roles)(hasRole);
};
