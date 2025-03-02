import { getUser } from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React from "react";
import toast from "react-hot-toast";

const useGetUser = (userId: string) => {
  const { isError, error, data, ...rest } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const { data: response } = await getUser(userId);
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

export default useGetUser;
