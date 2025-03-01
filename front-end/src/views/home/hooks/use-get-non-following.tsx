import { getNonFollowing } from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";

const useGetNonFollowing = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["non-following"],
    queryFn: async () => {
      const { data } = await getNonFollowing();
      return data.data;
    },
  });
  return {
    data: data || [],
    ...rest,
  };
};

export default useGetNonFollowing;
