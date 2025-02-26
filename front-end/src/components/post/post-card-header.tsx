import React from "react";
import { User } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "../common/avatar";
import { getFullName, getShortName } from "@/helpers/name";
import { Link } from "react-router-dom";
import { timeToNow } from "@/helpers/time";
import { Bell, Bookmark, EllipsisVertical, Trash2 } from "lucide-react";
import { Button } from "../common/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../common/dropdown-menu";

type Props = {
  postId: number;
  author: User;
  createdAt: string;
};

const PostCardHeader: React.FC<Props> = (props) => {
  const { author, createdAt, postId } = props;
  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar className="size-[42px]">
          <AvatarFallback>{getShortName(author)}</AvatarFallback>
          <AvatarImage
            src={author.profilePicture}
            alt={`${author.lastName}'s profile`}
          />
        </Avatar>
        <div>
          <Link
            to={`/profile/${author.uuid}`}
            className="text-foreground-header text-sm font-medium transition-colors duration-300 hover:text-accent"
            aria-label={`View ${getFullName(author)}'s profile`}
          >
            {getFullName(author)}
          </Link>
          <time
            dateTime={createdAt}
            className="block text-xs text-muted-foreground"
          >
            {timeToNow(createdAt)}
          </time>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost-muted"
            size="icon"
            aria-label="Open post options menu"
          >
            <EllipsisVertical aria-hidden="true" className="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[280px] p-2">
          <DropdownMenuItem>
            <div className="flex items-center gap-2">
              <Bookmark aria-hidden="true" className="size-4" />
              <div className="flex-grow flex flex-col">
                <span className="text-foreground-header text-sm font-medium">
                  Bookmark
                </span>
                <span className="text-xs text-muted-foreground">
                  Add this post to your bookmarks.
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <div className="flex items-center gap-2 cursor-not-allowed">
              <Bell aria-hidden="true" className="size-4" />
              <div className="flex-grow flex flex-col">
                <span className="text-foreground-header text-sm font-medium">
                  Notify me
                </span>
                <span className="text-xs text-muted-foreground">
                  Send me the updates.
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={`/delete/${postId}`}>
              <div className="flex items-center gap-2">
                <Trash2 aria-hidden="true" className="size-4" />
                <div className="flex-grow flex flex-col">
                  <span className="text-foreground-header text-sm font-medium">
                    Delete
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Delete this post
                  </span>
                </div>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default PostCardHeader;
