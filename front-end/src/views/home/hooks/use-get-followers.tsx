import { getFollowers } from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";

const useGetFollowers = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["followers"],
    queryFn: async () => {
      const { data } = await getFollowers();
      return data.data;
    },
  });
  return {
    data: data || [],
    ...rest,
  };
};

export default useGetFollowers;
