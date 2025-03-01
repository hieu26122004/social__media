import Tabs, { TabsItem, TabsList } from "@/components/tab/tab";
import { Filter, Search } from "lucide-react";
import UsersSuggestTab from "./components/users-suggest-tab";
import UsersFollowerTab from "./components/users-follower-tab";
import UsersFollowingTab from "./components/users-following-tab";
import useGetNonFollowing from "../home/hooks/use-get-non-following";
import useGetFollowing from "../home/hooks/use-get-following";
import useGetFollowers from "../home/hooks/use-get-followers";
import UsersSkeleton from "./components/users-skeleton";
import useLoading from "@/hooks/use-loading";

const Users = () => {
  const { data: nonFollowing, isFetching: nonFollowingLoading } =
    useGetNonFollowing();
  const { data: following, isFetching: followingLoading } = useGetFollowing();
  const { data: followers, isFetching: followersLoading } = useGetFollowers();
  const loading =
    nonFollowingLoading === true ||
    followingLoading === true ||
    followersLoading === true;
  const { visibleLoading } = useLoading(loading);

  if (visibleLoading) {
    return <UsersSkeleton />;
  }

  return (
    <Tabs defaultTab="all" className="w-full min-h-screen bg-background pb-16">
      <header className="w-full bg-primary">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between h-12 px-4">
          <div className="h-full flex items-center gap-4">
            <Filter className="size-4 cursor-pointer" aria-hidden="true" />
            <nav className="w-56 h-full">
              <TabsList>
                <TabsItem value="all">All</TabsItem>
                <TabsItem value="following">Following</TabsItem>
                <TabsItem value="followers">Followers</TabsItem>
              </TabsList>
            </nav>
          </div>

          <div className="hidden lg:flex items-center divide-x">
            <span className="px-5">979 friends</span>
            <button
              type="button"
              className="inline-flex items-center justify-center size-12 [&>svg]:size-4"
              aria-label="Search users"
            >
              <Search aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <main className="w-full px-5">
        <div className="max-w-[1200px] mx-auto mt-5">
          <UsersSuggestTab users={nonFollowing} />
          <UsersFollowingTab users={following} />
          <UsersFollowerTab users={followers} />
        </div>
      </main>
    </Tabs>
  );
};

export default Users;
