import React from "react";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { getUserPosts } from "@/api/user.api";

const useGetUserPosts = (userId: string) => {
  const { isError, error, data, ...rest } = useQuery({
    queryKey: ["user-posts", userId],
    queryFn: async () => {
      const { data: response } = await getUserPosts(userId);
      return response.data;
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
    data,
    ...rest,
  };
};

export default useGetUserPosts;
