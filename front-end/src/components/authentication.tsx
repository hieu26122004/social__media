import React from "react";
import toast from "react-hot-toast";
import Loading from "./loading";
import { loadUser } from "@/api/user.api";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setUser } from "@/store/user-slice";
import { AxiosError } from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { PATHS } from "@/constants/path";

const Authentication: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const checkAuth = React.useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await loadUser();
      const { data } = response.data;
      if (data && !user) {
        dispatch(setUser(data));
      }
    } catch (error) {
      console.log("object", error);
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message || "An error occurred");
      } else {
        setError("Unknown error");
      }
      toast.error("Please log in to continue.");
      navigate(PATHS.LOGIN);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, navigate, user]);

  React.useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return null;
  }

  return <Outlet />;
};

export default Authentication;
