import React from "react";
import useGetAllPost from "../hooks/use-get-all-post";
import PostCard from "@/components/post/post-card";
import useToggleLike from "../hooks/use-toggle-like";
import useCreateComment from "../hooks/use-create-comment";
import { Button } from "@/components/common/button";

const AllPost = () => {
  const { data } = useGetAllPost();
  const { mutate: toggleLike } = useToggleLike();
  const { mutate: createComment } = useCreateComment();
  return (
    <React.Fragment>
      {data.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={toggleLike}
          onComment={createComment}
        />
      ))}
      <div className="flex items-center justify-center py-10">
        <Button variant="default" size="lg">
          Load more
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AllPost;
