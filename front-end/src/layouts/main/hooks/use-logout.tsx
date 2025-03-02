import { logout } from "@/api/auth.api";
import { PATHS } from "@/constants/path";
import { useAppDispatch } from "@/store/hook";
import { clearUser } from "@/store/user-slice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: logout,
    onSuccess(data) {
      toast.success(data.data.message);
      dispatch(clearUser());
      localStorage.removeItem("user");
      navigate(PATHS.LOGIN);
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

export default useLogout;
