import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { Button } from "@/components/common/button";
import { getFullName } from "@/helpers/name";
import { cn } from "@/lib/utils";
import { User } from "@/types/user";
import { EllipsisVertical, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  users?: User[];
  visibleCount: number;
};

const Following: React.FC<Props> = (props) => {
  const { users = [], visibleCount } = props;
  const usersVisible = users.slice(0, visibleCount);

  return (
    <div className="w-full space-y-3">
      <div className="w-full bg-primary flex items-center justify-between py-2 px-4 rounded-lg">
        <h4 className="text-foreground-header font-medium">Following</h4>
        <Button variant="ghost-muted" size="icon">
          <EllipsisVertical aria-hidden="true" className="size-5" />
        </Button>
      </div>
      <div className="bg-primary border rounded-lg divide-y">
        {usersVisible.map((item) => (
          <FollowingItem key={item.uuid} user={item} />
        ))}
      </div>
    </div>
  );
};

type FollowingItemProps = {
  user: User;
};

const FollowingItem: React.FC<FollowingItemProps> = (props) => {
  const { user } = props;
  const [iconClick, setIconClick] = React.useState(false);

  return (
    <div className="flex items-center justify-between py-[10px] px-4">
      <div className="flex-shrink-0 flex items-center gap-3">
        <Avatar className="size-11">
          <AvatarFallback>{getFullName(user)}</AvatarFallback>
          <AvatarImage src={user.profilePicture} alt={user.lastName} />
        </Avatar>
        <p>
          <Link
            to={`/profile/${user.uuid}`}
            className="font-medium text-sm text-foreground transition-colors hover:text-accent"
          >
            {getFullName(user)}
          </Link>
          <p className="text-foreground-header font-normal text-sm">
            Media Influencer
          </p>
        </p>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <Star
          onClick={() => setIconClick(!iconClick)}
          className={cn(
            "size-5 transition-all duration-300",
            iconClick ? "rotate-[360deg] fill-accent stroke-accent" : ""
          )}
          aria-hidden="true"
        />
        <span className="sr-only">Markup</span>
      </div>
    </div>
  );
};

export default Following;
