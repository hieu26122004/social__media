import { Button } from "@/components/common/button";
import useGetSuggestedUser from "../hooks/use-get-suggested-user";
import { EllipsisVertical, UserPlus } from "lucide-react";
import { User } from "@/types/user";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { getFullName, getShortName } from "@/helpers/name";

const SuggestedUser = () => {
  const { data: users = [] } = useGetSuggestedUser();

  return (
    <article
      className="bg-primary rounded-lg overflow-hidden divide-y"
      aria-label="Suggested friends list"
    >
      <header className="flex items-center justify-between p-4">
        <h3 className="text-foreground-header dark:text-foreground text-sm font-normal capitalize">
          Suggested Friends
        </h3>
        <Button
          variant="ghost-muted"
          size="icon"
          aria-label="More options for suggested friends"
        >
          <EllipsisVertical aria-hidden="true" />
        </Button>
      </header>
      {users.map((user) => (
        <SuggestedItem key={user.uuid} user={user} />
      ))}
    </article>
  );
};

type SuggestedItemProps = {
  user: User;
};

const SuggestedItem: React.FC<SuggestedItemProps> = ({ user }) => {
  const handleFollow = () => {
    console.log(`Follow user: ${user.uuid}`);
  };

  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <Avatar className="size-10">
          <AvatarImage src={user.profilePicture} alt={user.lastName} />
          <AvatarFallback>{getShortName(user)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-[0.8rem] text-foreground-header font-medium">
            {getFullName(user)}
          </span>
          <span className="text-[0.7rem] -mt-1 text-muted-foreground">
            Vietnamese
          </span>
        </div>
      </div>
      <Button
        onClick={handleFollow}
        variant="ghost-muted"
        size="icon"
        aria-label={`Follow ${getFullName(user)}`}
      >
        <UserPlus aria-hidden="true" />
      </Button>
    </div>
  );
};

export default SuggestedUser;
