export type Roles = string[];
export type EntityOwnerId = string;
export type PermissionType = "one-of" | "all-of";

export type CheckPermissionConfig = {
  type?: PermissionType;
  entityOwnerId?: EntityOwnerId;
};
