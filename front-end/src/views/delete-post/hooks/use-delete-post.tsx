import { deletePost } from "@/api/post.api";
import { PATHS } from "@/constants/path";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useDeletePost = (postId: number) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await deletePost(postId);
      return data;
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onError(error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred");
      } else {
        toast.error("Unknown error");
      }
    },
    onSettled() {
      navigate(PATHS.HOME);
    },
  });

  return mutation;
};

export default useDeletePost;
