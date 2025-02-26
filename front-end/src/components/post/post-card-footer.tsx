import { Heart, Link2, LucideIcon, MessageCircle } from "lucide-react";
import React from "react";
import { Button } from "../common/button";

type Props = {
  postId: number;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  onLike?: (postId: number) => void;
  onOpenComment: () => void;
  onShare?: (postId: number) => void;
};

const PostCardFooter: React.FC<Props> = (props) => {
  const { likeCount, commentCount, postId, onLike, isLiked, onOpenComment } =
    props;

  const handleLikeChange = () => {
    if (onLike) {
      onLike(postId);
    }
  };

  return (
    <footer className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <label
          htmlFor={`like-${postId}`}
          className="size-12 bg-accent inline-flex items-center justify-center rounded-full cursor-pointer relative isolate"
        >
          <input
            type="checkbox"
            className="hidden peer"
            id={`like-${postId}`}
            onChange={handleLikeChange}
            checked={isLiked}
          />
          <div className="absolute z-10 size-12 bg-destructive rounded-full transition-all duration-500 scale-0 peer-checked:scale-100" />
          <Heart
            aria-label="true"
            className="absolute z-20 size-4 stroke-white fill-white shadow-2xl peer-checked:animate-like [&:not(:checked)]:animate-unlike"
          />
          <span className="sr-only">Like</span>
        </label>

        <Button
          variant="accent"
          className="size-11 after:rounded-full rounded-full"
          aria-label="Comment"
          onClick={onOpenComment}
        >
          <MessageCircle aria-hidden="true" />
        </Button>
        <Button
          variant="accent"
          className="size-11 after:rounded-full rounded-full"
          aria-label="Share"
        >
          <Link2 aria-hidden="true" />
        </Button>
      </div>
      <section className="flex items-center gap-3">
        <SocialCount Icon={Heart} count={likeCount} />
        <SocialCount Icon={MessageCircle} count={commentCount} />
        <SocialCount Icon={Link2} count={0} />
      </section>
    </footer>
  );
};

const SocialCount = ({ Icon, count }: { Icon: LucideIcon; count: number }) => {
  return (
    <div className="flex items-center gap-1 text-xs">
      <Icon className="size-4" aria-hidden="true" />
      <span>{count}</span>
    </div>
  );
};

export default PostCardFooter;
