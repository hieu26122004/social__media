import React from "react";
import { Post } from "@/types/post";
import PostCardHeader from "./post-card-header";
import PostCardBody from "./post-card-body";
import PostCardFooter from "./post-card-footer";
import PostCardComment from "./post-card-comment";
import { CreateCommentRequest } from "@/api/comment.api";

type Props = {
  post: Post;
  onLike?: (postId: number) => void;
  onComment?: (data: CreateCommentRequest) => void;
  onShare?: (postId: number) => void;
};

const PostCard: React.FC<Props> = (props) => {
  const { post, onComment, onLike, onShare } = props;

  const [openComment, setOpenComment] = React.useState(false);

  const handleToggleComment = () => setOpenComment(!openComment);

  return (
    <React.Fragment>
      <article className="isolate bg-primary w-full p-4 rounded-lg shadow-md overflow-hidden">
        <PostCardHeader
          postId={post.id}
          author={post.author}
          createdAt={post.createdAt}
        />
        <PostCardBody
          id={post.id}
          description={post.description}
          images={post.images}
        />
        <PostCardFooter
          commentCount={post.commentCount}
          isLiked={post.isLiked}
          likeCount={post.likeCount}
          onOpenComment={handleToggleComment}
          onLike={onLike}
          onShare={onShare}
          postId={post.id}
        />
      </article>
      {openComment && (
        <PostCardComment
          postId={post.id}
          openComment={openComment}
          onCloseComment={handleToggleComment}
          onComment={onComment}
        />
      )}
    </React.Fragment>
  );
};

export default PostCard;
