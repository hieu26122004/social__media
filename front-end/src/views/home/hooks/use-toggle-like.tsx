import { toggleLike } from "@/api/post.api";
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useToggleLike = () => {
  const mutation = useMutation({
    mutationFn: async (postId: number) => {
      const response = await toggleLike(postId);
      return response.data;
    },
    onSuccess(data) {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["post", { postId: data.data?.id }],
        exact: true,
      });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return mutation;
};

export default useToggleLike;
