import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { getFullName, getShortName } from "@/helpers/name";
import { Post } from "@/types/post";
import { Heart, LucideIcon, MessageCircle, Send } from "lucide-react";
import useGetPostComment from "../hooks/use-get-post-comments";
import { formatTimeAgo } from "@/helpers/time";
import { useAppSelector } from "@/store/hook";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import { CreateCommentRequest } from "@/api/comment.api";

type Props = {
  post: Post;
  postId: number;
  onComment: (data: CreateCommentRequest) => void;
};

const DEFAULT_CONTENT = "";

const PostAction: React.FC<Props> = ({ post, postId, onComment }) => {
  const { user } = useAppSelector((state) => state.user);
  const { data: comments = [], isFetching } = useGetPostComment(postId);
  const [content, setContent] = React.useState(DEFAULT_CONTENT);

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onComment({ content, postId });
    setContent(DEFAULT_CONTENT);
  };

  return (
    <aside
      className="w-full sm:w-[350px] h-[400px] sm:h-full bg-primary "
      aria-label="Post actions and comments"
    >
      <article className="h-full flex flex-col">
        <header className="w-full">
          <div className="flex items-center justify-between p-3 pb-0">
            <div className="flex items-center gap-2">
              <Avatar className="size-11">
                <AvatarImage
                  src={post.author.profilePicture}
                  alt={post.author.lastName}
                />
                <AvatarFallback>{getShortName(post.author)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h3 className="text-foreground-header font-medium text-xs">
                  {getFullName(post.author)}
                </h3>
                <time className="text-[0.65rem]" dateTime={post.createdAt}>
                  {formatTimeAgo(post.createdAt)}
                </time>
              </div>
            </div>
            <button
              className="text-accent-foreground text-xs bg-accent rounded-lg px-3 py-2"
              aria-label="Follow author"
            >
              Follow
            </button>
          </div>
          <div className="flex items-center gap-3 py-4 px-3 border-b border-muted">
            <SocialCount Icon={Heart} count={post.likeCount} />
            <SocialCount Icon={MessageCircle} count={post.commentCount} />
          </div>
          <nav className="flex items-center justify-between gap-3 p-3">
            <SocialCount
              Icon={Heart}
              count="Like"
              action={() => console.log("Like post")}
            />
            <SocialCount
              Icon={MessageCircle}
              count="Comment"
              action={() => console.log("Comment post")}
            />
          </nav>
        </header>
        <section
          className="flex-1 border-t border-muted overflow-y-auto overflow-x-hidden bg-primary"
          aria-label="Comments list"
        >
          <ul className="h-full p-2">
            {isFetching ? (
              <li className="py-4 animate-pulse">
                <div className="flex items-start gap-2">
                  <div className="size-9 bg-gray-300 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-1/3" />
                    <div className="h-3 bg-gray-300 rounded w-1/4" />
                  </div>
                </div>
              </li>
            ) : comments.length === 0 ? (
              <li className="py-4 text-xs text-muted-foreground text-center">
                No comments yet
              </li>
            ) : (
              comments.map((comment) => (
                <li
                  key={comment.uuid}
                  className="flex items-start gap-2 py-4 first:pt-0"
                >
                  <Avatar className="size-9">
                    <AvatarImage
                      src={comment.author.profilePicture}
                      alt={comment.author.lastName}
                    />
                    <AvatarFallback>
                      {getShortName(comment.author)}
                    </AvatarFallback>
                  </Avatar>
                  <article className="flex-1 bg-background rounded-lg p-2">
                    <header className="flex items-center justify-between mb-1">
                      <h4 className="text-foreground-header text-xs font-medium">
                        {getFullName(comment.author)}
                      </h4>
                      <time
                        className="text-[0.65rem]"
                        dateTime={comment.createdAt}
                      >
                        {formatTimeAgo(comment.createdAt)}
                      </time>
                    </header>
                    <p className="text-xs">{comment.content}</p>
                  </article>
                </li>
              ))
            )}
          </ul>
        </section>

        <footer className="flex items-center gap-2 p-3 border-t">
          <Avatar className="size-9">
            <AvatarFallback>{getShortName(user!)}</AvatarFallback>
            <AvatarImage src={user!.profilePicture} alt={user!.lastName} />
          </Avatar>
          <form
            onSubmit={handleCommentSubmit}
            className="flex-1 flex items-center gap-2"
          >
            <Input
              id="comment"
              placeholder="Write a comment..."
              type="text"
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button aria-label="Submit comment" size="icon">
              <Send className="size-4" aria-hidden="true" />
            </Button>
          </form>
        </footer>
      </article>
    </aside>
  );
};

const SocialCount = ({
  Icon,
  count,
  action,
}: {
  Icon: LucideIcon;
  count: number | string;
  action?: () => void;
}) => {
  return (
    <button
      onClick={action}
      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
      aria-label={`${count === "Like" ? "Like post" : "Comment on post"}`}
    >
      <Icon className="size-3" aria-hidden="true" />
      <span>{count}</span>
    </button>
  );
};

export default PostAction;
