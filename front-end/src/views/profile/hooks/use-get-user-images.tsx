import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserImage } from "@/api/user.api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useGetUserImages = (userId: string) => {
  const { isError, error, data, ...rest } = useQuery({
    queryKey: ["user-images", userId],
    queryFn: async () => {
      const { data: response } = await getUserImage(userId);
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

export default useGetUserImages;
