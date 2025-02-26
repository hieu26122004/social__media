import { login } from "@/api/auth.api";
import { useAppDispatch } from "@/store/hook";
import { setUser } from "@/store/user-slice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess(response) {
      toast.success(response.data.message);
      dispatch(setUser(response.data.data!));
      localStorage.setItem("user", "valid");
      navigate("/");
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

export default useLogin;
