import { getComments } from "@/api/post.api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useGetComments = (postId: number, enabled: boolean) => {
  const { isError, error, data, ...rest } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const response = await getComments(postId);
      return response.data.data;
    },
    enabled,
  });
  if (isError) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data?.message || "An error occurred");
    } else {
      toast.error("Unknown error");
    }
  }
  return {
    isError,
    error,
    data: data || [],
    ...rest,
  };
};

export default useGetComments;
