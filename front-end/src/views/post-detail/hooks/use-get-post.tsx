import React from "react";
import { getPost } from "@/api/post.api";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useGetPost = (postId: number) => {
  const navigate = useNavigate();
  const queryResult = useQuery({
    queryKey: ["post", postId],
    queryFn: async () => {
      const { data } = await getPost(postId);
      return data.data;
    },
  });

  const { error, isError } = queryResult;

  React.useEffect(() => {
    if (isError) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred");
      } else {
        toast.error("Unknown error");
      }
      navigate(-1);
    }
  }, [isError, error, navigate]);

  return queryResult;
};

export default useGetPost;
