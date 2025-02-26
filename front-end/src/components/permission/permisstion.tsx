import React from "react";
import { EntityOwnerId, PermissionType, Roles } from "./permission.type";
import { useAppSelector } from "@/store/hook";
import { checkPermission } from "./check-perrmission";

type Props = {
  children: React.ReactNode;
  noAccess: React.ReactNode | (() => void);
  roles: Roles;
  type?: PermissionType;
  entityOwnerId?: EntityOwnerId;
};

const Permission: React.FC<Props> = (props) => {
  const { children, noAccess, roles, entityOwnerId, type } = props;

  const { user } = useAppSelector((state) => state.user);
  const [hasAccess, setHasAccess] = React.useState(
    user
      ? checkPermission(user, roles, {
          type,
          entityOwnerId,
        })
      : false
  );

  React.useEffect(() => {
    if (!user) {
      setHasAccess(false);
    } else {
      setHasAccess(
        checkPermission(user, roles, {
          type,
          entityOwnerId,
        })
      );
    }
  }, [entityOwnerId, roles, type, user]);

  const renderNoAccess = () => {
    if (typeof noAccess === "function") {
      noAccess();
      return null;
    }
    return noAccess;
  };

  return hasAccess ? children : renderNoAccess();
};

export default Permission;
