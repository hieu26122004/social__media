import React from "react";
import { getFollowing } from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useGetFollowing = (userId?: string) => {
  const { data, isError, error, ...rest } = useQuery({
    queryKey: userId ? ["following", userId] : ["following"],
    queryFn: async () => {
      const { data: response } = await getFollowing(userId);
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
    data: data || [],
    ...rest,
  };
};

export default useGetFollowing;
