import { useMutation } from "@tanstack/react-query";
import { updateMe } from "@/api/user.api";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/store/hook";
import { setUser } from "@/store/user-slice";
import { AxiosError } from "axios";

const useUpdateMe = () => {
  const dispatch = useAppDispatch();
  const mutation = useMutation({
    mutationFn: updateMe,
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

export default useUpdateMe;
