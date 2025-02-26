import React from "react";
import { getComments } from "@/api/post.api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useGetPostComment = (postId: number) => {
  const { isError, error, data, ...rest } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const { data } = await getComments(postId);
      return data.data;
    },
  });
  React.useEffect(() => {
    if (isError) {
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
    data: data || [],
    ...rest,
  };
};

export default useGetPostComment;
