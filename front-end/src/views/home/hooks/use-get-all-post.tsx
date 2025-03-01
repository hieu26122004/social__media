import React from "react";
import { getAllPost } from "@/api/post.api";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { POST_PER_PAGE } from "@/constants/app.constants";
import { GetAllPostResponse } from "@/api/post.api";

const useGetAllPost = () => {
  const {
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...rest
  } = useInfiniteQuery<
    GetAllPostResponse,
    unknown,
    InfiniteData<GetAllPostResponse>,
    string[],
    string | null
  >({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) => {
      const { data: response } = await getAllPost(pageParam, POST_PER_PAGE);
      return response.data;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.nextCursor || null,
  });

  React.useEffect(() => {
    if (isError && error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred");
      } else {
        toast.error("Unknown error");
      }
    }
  }, [isError, error]);

  return {
    isError,
    error,
    data: data?.pages.flatMap((page) => page.posts) || [],
    loadMore: fetchNextPage,
    hasMore: hasNextPage,
    isFetchingMore: isFetchingNextPage,
    ...rest,
  };
};

export default useGetAllPost;
