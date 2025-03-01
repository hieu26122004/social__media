import React from "react";
import PostCard from "@/components/post/post-card";
import useToggleLike from "../hooks/use-toggle-like";
import useCreateComment from "../hooks/use-create-comment";
import { Button } from "@/components/common/button";
import { Post } from "@/types/post";

type Props = {
  posts: Post[];
  loadMore: () => void;
  hasMore: boolean;
  isFetching: boolean;
};

const AllPost: React.FC<Props> = (props) => {
  const { posts, hasMore, isFetching, loadMore } = props;
  const { mutate: toggleLike } = useToggleLike();
  const { mutate: createComment } = useCreateComment();

  return (
    <React.Fragment>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={toggleLike}
          onComment={createComment}
        />
      ))}
      <div className="flex items-center justify-center py-10">
        <Button
          variant="default"
          size="lg"
          onClick={() => loadMore()}
          disabled={!hasMore || isFetching}
        >
          {isFetching ? "Loading..." : "Load more"}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default AllPost;
