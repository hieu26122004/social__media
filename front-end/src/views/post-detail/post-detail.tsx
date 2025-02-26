import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetPost from "./hooks/use-get-post";
import PostAside from "./components/post-aside";
import PostAction from "./components/post-action";
import PostImages from "./components/post-images";
import PostLoading from "./components/post-loading";
import useCreateComment from "../home/hooks/use-create-comment";

const PostDetail: React.FC = () => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string; imageId?: string }>();
  const { isFetching: postLoading, data: post } = useGetPost(Number(postId));
  const { mutate: createComment } = useCreateComment();

  const handleClose = () => {
    navigate(-1);
  };

  const handleShare = () => {
    console.log("Share post:", postId);
  };

  return (
    <section
      className="w-screen h-screen overflow-hidden relative isolate bg-background"
      aria-label="Post detail view"
    >
      {post && (
        <div className="h-full flex">
          <div className="flex-1 flex flex-col sm:flex-row">
            <PostImages images={post?.images} />
            <PostAction
              onComment={createComment}
              post={post}
              postId={Number(postId)}
            />
          </div>
          <PostAside onClose={handleClose} onShare={handleShare} />
        </div>
      )}
      <PostLoading loading={postLoading} />
    </section>
  );
};

export default PostDetail;
