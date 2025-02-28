import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { getFullName, getShortName } from "@/helpers/name";
import { User } from "@/types/user";
import { Check } from "lucide-react";

type Props = {
  user: User;
};

const UserProfile: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <header className="h-36 m-5 mb-0 border-b text-center">
      <figure className="flex items-center justify-center size-[74px] border rounded-full mx-auto mb-2 relative isolate">
        <Avatar className="size-[58px]">
          <AvatarFallback>{getShortName(user)}</AvatarFallback>
          <AvatarImage src={user?.profilePicture} alt={user?.lastName} />
        </Avatar>
        <VerificationBadge />
      </figure>
      <h3 className="text-sm font-bold text-foreground-header font-montserrat">
        {getFullName(user)}
      </h3>
      <p className="text-xs">Melbourne, AU</p>
    </header>
  );
};

const VerificationBadge = () => (
  <div className="size-6 bg-success flex items-center justify-center rounded-full absolute bottom-0 right-0">
    <Check
      className="size-3 stroke-2 text-foreground-header"
      aria-hidden="true"
    />
    <span className="sr-only">Verified</span>
  </div>
);

export default UserProfile;
