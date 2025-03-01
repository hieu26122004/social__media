import useLoading from "@/hooks/use-loading";
import AdsCard from "./components/ads-card";
import AllPost from "./components/all-post";
import CreatePost from "./components/create-post";
import SuggestedUser from "./components/suggested-user";
import WeatherCard from "./components/weather-card";
import useGetAllPost from "./hooks/use-get-all-post";
import useGetNonFollowing from "./hooks/use-get-non-following";
import HomeSkeleton from "./components/home-skeleton";

const Home = () => {
  const {
    data: posts,
    loadMore,
    hasMore,
    isFetching: isPostsLoading,
  } = useGetAllPost();
  const { data: users, isFetching: isUsersLoading } = useGetNonFollowing();
  const loading = isPostsLoading === true && isUsersLoading === true;
  const { visibleLoading } = useLoading(loading);

  if (visibleLoading) {
    return <HomeSkeleton />;
  }

  return (
    <div className="h-full w-full grid grid-cols-12 overflow-hidden px-2 py-4">
      <aside className="hidden md:block md:col-span-3">
        <WeatherCard />
      </aside>
      <section className="col-span-full md:col-span-6 flex flex-col gap-4 mx-0 sm:mx-4">
        <CreatePost />
        <AllPost
          posts={posts}
          hasMore={hasMore}
          isFetching={isPostsLoading}
          loadMore={loadMore}
        />
      </section>
      <aside className="hidden md:block md:col-span-3 space-y-6">
        <SuggestedUser users={users} visibleCount={5} />
        <AdsCard />
      </aside>
    </div>
  );
};

export default Home;
