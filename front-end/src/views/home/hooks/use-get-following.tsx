import { getFollowing } from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";

const useGetFollowing = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["following"],
    queryFn: async () => {
      const { data } = await getFollowing();
      return data.data;
    },
  });
  return {
    data: data || [],
    ...rest,
  };
};

export default useGetFollowing;
