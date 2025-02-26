import { register } from "@/api/auth.api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: register,
    onSuccess(response) {
      toast.success(response.data.message);
      navigate("/login");
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

export default useRegister;
