import React from "react";
import { Button } from "../common/button";
import { AtSign, Camera, Smile, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../common/avatar";
import { getFullName, getShortName } from "@/helpers/name";
import { Link } from "react-router-dom";
import { formatTimeAgo } from "@/helpers/time";
import { Textarea } from "../common/textarea";
import { useAppSelector } from "@/store/hook";
import useGetComments from "./hooks/use-get-comments";
import { CreateCommentRequest } from "@/api/comment.api";

type Props = {
  postId: number;
  openComment: boolean;
  onCloseComment: () => void;
  onComment?: (data: CreateCommentRequest) => void;
};

const DEFAULT_CONTENT = "";

const MIN_LOADING_TIME = 3000;

const PostCardComment: React.FC<Props> = ({
  openComment,
  onCloseComment,
  onComment,
  postId,
}) => {
  const { user } = useAppSelector((state) => state.user);
  const { data: comments, isFetching } = useGetComments(postId, openComment);
  const lastTimeLoaded = React.useRef(0);
  const [loading, setLoading] = React.useState(false);
  const [content, setContent] = React.useState(DEFAULT_CONTENT);

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onComment) onComment({ content, postId });
    setContent(DEFAULT_CONTENT);
  };

  React.useEffect(() => {
    if (!openComment) {
      setLoading(false);
      lastTimeLoaded.current = 0;
      return;
    }
    if (isFetching && !loading) {
      setLoading(true);
      lastTimeLoaded.current = Date.now();
    }
    if (loading) {
      const timeDiff = Date.now() - lastTimeLoaded.current;
      const remainingTime = MIN_LOADING_TIME - timeDiff;
      if (!isFetching && timeDiff < MIN_LOADING_TIME) {
        const timeout = setTimeout(() => {
          setLoading(false);
        }, remainingTime);
        return () => clearTimeout(timeout);
      } else if (!isFetching && timeDiff >= MIN_LOADING_TIME) {
        setLoading(false);
      }
    }
  }, [isFetching, openComment, loading]);

  return (
    <section
      className="bg-primary rounded-lg p-3 relative isolate"
      aria-label="Comments section"
      aria-hidden={!openComment}
    >
      <div className="bg-card border border-input dark:border-border rounded-xl h-full flex flex-col">
        <header className="flex items-center justify-between p-4">
          <h2 className="font-medium text-sm">
            Comments <span>({comments.length})</span>
          </h2>
          <Button
            onClick={onCloseComment}
            variant="ghost-muted"
            size="icon"
            className="absolute top-3 right-3 z-20"
            aria-label="Close comments"
          >
            <X className="size-[18px]" />
          </Button>
        </header>

        <ul className="p-4 max-h-[450px] overflow-y-auto overflow-x-hidden divide-y flex-1">
          {comments.map((comment) => (
            <li
              key={comment.uuid}
              className="flex items-start gap-4 py-4 first:pt-0"
            >
              <Avatar className="size-9">
                <AvatarFallback>{getShortName(comment.author)}</AvatarFallback>
                <AvatarImage src={comment.author.profilePicture} alt="" />
              </Avatar>
              <div className="flex-1">
                <Link
                  to={`/profile/${comment.userId}`}
                  className="text-foreground text-sm font-medium hover:text-accent transition-colors duration-300"
                >
                  {getFullName(comment.author)}
                </Link>
                <time
                  className="text-xs block mb-[10px]"
                  dateTime={comment.createdAt}
                >
                  {formatTimeAgo(comment.createdAt)}
                </time>
                <p className="text-sm">{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>

        <footer className="p-4">
          <form
            className="border rounded-lg bg-card"
            onSubmit={handleCommentSubmit}
          >
            <Textarea
              className="bg-input resize-none text-foreground rounded-b-none text-sm focus-visible:ring-0"
              rows={5}
              placeholder="Write a comment..."
              aria-label="Comment input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex items-center justify-between p-2 rounded-b-lg bg-card">
              <Avatar className="size-8">
                <AvatarFallback>{getShortName(user)}</AvatarFallback>
                <AvatarImage src={user?.profilePicture} alt="" />
              </Avatar>
              <div className="flex items-center gap-4">
                <button type="button" aria-label="Add mention">
                  <AtSign className="size-[18px] cursor-pointer" />
                </button>
                <button type="button" aria-label="Add emoji">
                  <Smile className="size-[18px] cursor-pointer" />
                </button>
                <button type="button" aria-label="Add image">
                  <Camera className="size-[18px] cursor-pointer" />
                </button>
                <Button type="submit">Post Comment</Button>
              </div>
            </div>
          </form>
        </footer>
      </div>
      {loading && (
        <div className="absolute z-10 inset-0 bg-primary rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="size-14 bg-transparent border-[5px] border-transparent border-t-accent rounded-full animate-spin" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PostCardComment;
