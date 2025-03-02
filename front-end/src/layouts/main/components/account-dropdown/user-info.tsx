import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { DropdownMenuItem } from "@/components/common/dropdown-menu";
import { getFullName, getShortName } from "@/helpers/name";
import { User } from "@/types/user";
import { Link } from "react-router-dom";
import { PATHS } from "@/constants/path";

type Props = { user: User };

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <DropdownMenuItem asChild>
      <Link
        to={PATHS.PROFILE.replace(":userId", user!.uuid)}
        className="flex items-center gap-3"
      >
        <Avatar>
          <AvatarFallback>{getShortName(user)}</AvatarFallback>
          <AvatarImage src={user.profilePicture} alt={user.lastName} />
        </Avatar>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-foreground">
            {getFullName(user)}
          </h3>
          <p className="text-xs text-muted-foreground">Main account</p>{" "}
        </div>
      </Link>
    </DropdownMenuItem>
  );
};

export default UserInfo;
