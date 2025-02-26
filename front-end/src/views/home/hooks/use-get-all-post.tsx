import { getAllPost } from "@/api/post.api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useGetAllPost = () => {
  const { isError, error, data, ...rest } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await getAllPost();
      return response.data.data;
    },
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

export default useGetAllPost;
