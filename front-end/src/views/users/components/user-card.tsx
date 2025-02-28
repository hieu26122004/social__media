import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { getFullName, getShortName } from "@/helpers/name";
import { cn } from "@/lib/utils";
import { User } from "@/types/user";
import { UserPlus } from "lucide-react";

type UserStats = {
  followerCount: number;
  followingCount: number;
  postCount: number;
};

type Props = {
  user: User & UserStats;
};

const UserCard: React.FC<Props> = ({ user }) => {
  console.log("user", user);

  return (
    <article className="relative isolate bg-primary p-5 rounded shadow">
      <figure className="relative isolate flex justify-center my-2">
        <Avatar className="size-[90px]">
          <AvatarFallback>{getShortName(user)}</AvatarFallback>
          <AvatarImage
            src={user.profilePicture}
            alt={`${user.firstName} ${user.lastName}'s profile`}
          />
        </Avatar>

        <div className="w-[90px] inline-flex justify-end absolute bottom-0">
          <img
            src={user.profile?.country}
            alt="country flag"
            className="size-7 border-2 rounded-full object-cover"
          />
        </div>
      </figure>
      <div className="text-center">
        <h2 className="text-foreground-header text-[0.95rem] font-medium capitalize">
          {getFullName(user)}
        </h2>
        <p className="text-foreground text-sm">{user.profile?.bio}</p>
      </div>
      <div className="mt-5 flex items-center justify-between divide-x">
        <StatItem title="Posts" count={user.postCount} className="flex-1" />
        <StatItem
          title="Followers"
          count={user.followerCount}
          className="flex-1"
        />
        <StatItem
          title="Following"
          count={user.followingCount}
          className="flex-1"
        />
      </div>
      <button
        type="button"
        className="absolute top-5 right-5 size-11 inline-flex items-center justify-center cursor-pointer [&>svg]:size-5"
        aria-label={`Follow ${getFullName(user)}`}
      >
        <UserPlus aria-hidden="true" />
      </button>
    </article>
  );
};

type StatItemProps = {
  title: string;
  count: number;
} & React.HTMLAttributes<HTMLDivElement>;

const StatItem: React.FC<StatItemProps> = ({ count, title, className }) => {
  return (
    <div className={cn("px-5 text-center overflow-hidden", className)}>
      <h3 className="text-[0.6rem] font-medium uppercase overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </h3>
      <p className="text-base text-foreground-header font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
        {count}
      </p>
    </div>
  );
};

export default UserCard;
