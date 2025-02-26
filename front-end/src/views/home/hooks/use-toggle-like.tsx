import { toggleLike } from "@/api/post.api";
import { queryClient } from "@/main";
import { Post } from "@/types/post";
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
    },
    onMutate(variables) {
      queryClient.setQueryData<Post[]>(["posts"], (old) => {
        if (!Array.isArray(old)) return old;

        return old.map((item) => {
          if (item.id !== variables) return item;
          return {
            ...item,
            isLiked: !item.isLiked,
            likeCount: item.isLiked ? item.likeCount - 1 : item.likeCount + 1,
          };
        });
      });
    },
  });
  return mutation;
};

export default useToggleLike;
