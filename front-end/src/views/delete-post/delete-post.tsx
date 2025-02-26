import React from "react";
import { useParams } from "react-router-dom";
import useDeletePost from "./hooks/use-delete-post";

const DeletePost = () => {
  const { postId } = useParams<{ postId: string }>();

  const { mutate: deletePost } = useDeletePost(Number(postId));

  React.useEffect(() => {
    deletePost();
  }, []);

  return (
    <div className="fixed inset-0 z-10 bg-primary flex items-center justify-center">
      <div className="size-14 bg-transparent rounded-full border-4 border-transparent border-t-accent animate-spin" />
    </div>
  );
};

export default DeletePost;
