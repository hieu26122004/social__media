import { updateImages } from "@/api/user.api";
import { useAppDispatch } from "@/store/hook";
import { setUser } from "@/store/user-slice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const useUpdateImages = () => {
  const dispatch = useAppDispatch();
  const mutation = useMutation({
    mutationFn: updateImages,
    onSuccess(data) {
      toast.success(data.data.message);
      dispatch(setUser(data.data.data!));
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

export default useUpdateImages;
