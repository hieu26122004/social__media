import AdsCard from "./components/ads-card";
import AllPost from "./components/all-post";
import CreatePost from "./components/create-post";
import SuggestedUser from "./components/suggested-user";
import WeatherCard from "./components/weather-card";

const Home = () => {
  return (
    <div className="h-full w-full grid grid-cols-12 overflow-hidden px-2 py-4">
      <aside className="hidden md:block md:col-span-3">
        <WeatherCard />
      </aside>
      <section className="col-span-full md:col-span-6 flex flex-col gap-4 mx-0 sm:mx-4">
        <CreatePost />
        <AllPost />
      </section>
      <aside className="hidden md:block md:col-span-3 space-y-6">
        <SuggestedUser />
        <AdsCard />
      </aside>
    </div>
  );
};

export default Home;
