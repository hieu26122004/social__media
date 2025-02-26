import { createPost } from "@/api/post.api";
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useCreatePost = () => {
  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess(data) {
      toast.success(data.data.message);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError(error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred");
      } else {
        toast.error("Unknown error");
      }
    },
  });
  return mutation;
};

export default useCreatePost;
