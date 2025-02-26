import { getUnfollowedUsers } from "@/api/user.api";
import { useQuery } from "@tanstack/react-query";

const useGetSuggestedUser = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["suggested-user"],
    queryFn: async () => {
      const { data } = await getUnfollowedUsers();
      return data.data;
    },
  });
  return {
    data: data || [],
    ...rest,
  };
};

export default useGetSuggestedUser;
