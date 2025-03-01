import React from "react";
import { Button } from "@/components/common/button";
import { getFullName } from "@/helpers/name";
import { User } from "@/types/user";
import { Clock } from "lucide-react";

type Props = {
  user: User;
};

const ProfileStats: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className="w-full flex items-center justify-between pt-2 mt-12 md:mt-0">
      <div className="hidden md:block basis-1/4">
        <h3 className="font-montserrat text-foreground-header text-2xl font-semibold leading-tight">
          3.4K
        </h3>
        <p className="text-xs text-foreground font-medium uppercase">Friends</p>
      </div>
      <div className="flex-1 text-center">
        <h1 className="text-foreground-header text-[1.4rem] font-semibold leading-tight">
          {getFullName(user)}
        </h1>
        <p className="text-sm text-foreground">Media Influencer</p>
      </div>
      <div className="hidden md:flex justify-end basis-1/4">
        <Button variant="secondary" size="sm">
          <Clock className="mr-2" />
          History
        </Button>
      </div>
    </div>
  );
};

export default ProfileStats;
