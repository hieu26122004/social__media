import React from "react";
import { Post } from "@/types/post";
import { Button } from "@/components/common/button";
import { EllipsisVertical } from "lucide-react";
import PostCard from "@/components/post/post-card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { getFullName } from "@/helpers/name";

type Props = {
  posts?: Post[];
};

const Timeline: React.FC<Props> = (props) => {
  const { posts = [] } = props;

  return (
    <div className="flex-1">
      <div className="w-full bg-primary flex items-center justify-between py-2 px-4 rounded-lg mb-4">
        <h4 className="text-foreground-header font-medium">Timeline</h4>
        <Button variant="ghost-muted" size="icon">
          <EllipsisVertical aria-hidden="true" className="size-5" />
        </Button>
      </div>
      <div className="relative">
        <div className="absolute w-[2px] inset-y-0 left-[31px] bg-border"></div>
        <div className="space-y-6">
          {posts.map((item) => (
            <div key={item.id} className="w-full pl-20 relative space-y-4">
              <Avatar className="absolute size-11 left-[10px] top-3">
                <AvatarFallback>{getFullName(item.author)}</AvatarFallback>
                <AvatarImage src={item.author.profilePicture} />
              </Avatar>
              <PostCard post={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
