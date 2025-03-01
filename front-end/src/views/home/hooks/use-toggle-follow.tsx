import { toggleFollow } from "@/api/user.api";
import { queryClient } from "@/main";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useToggleFollow = () => {
  const mutation = useMutation({
    mutationFn: async (userId: string) => {
      const { data } = await toggleFollow(userId);
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
      queryClient.invalidateQueries({ queryKey: ["non-following"] });
      queryClient.invalidateQueries({ queryKey: ["following"] });
    },
  });

  return mutation;
};

export default useToggleFollow;
