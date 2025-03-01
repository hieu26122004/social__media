import { createComment, CreateCommentRequest } from "@/api/comment.api";
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useCreateComment = () => {
  return useMutation({
    mutationKey: ["create-comment"],
    mutationFn: async ({ postId, content }: CreateCommentRequest) => {
      const response = await createComment({ postId, content });
      return response.data;
    },
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries({
        queryKey: ["comments", response.data?.postId],
      });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to create comment"
        );
      } else {
        toast.error("An unexpected error occurred");
      }
    },
  });
};

export default useCreateComment;
