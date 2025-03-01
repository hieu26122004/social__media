import { CURRENT_USER, USERS } from "@/mocks/user";
import { IMAGE_URLS, POSTS } from "@/mocks/post";
import CoverImage from "./components/cover-image";
import ProfileNavButtons from "./components/profile-nav-buttons";
import ProfileStats from "./components/profile-stats";
import BasicInfo from "./components/basic-info";
import Photos from "./components/photos";
import Following from "./components/following";
import Videos from "./components/videos";
import Timeline from "./components/timeline";

const Profile = () => {
  return (
    <div className="max-w-[1140px] mx-auto p-3">
      <CoverImage user={CURRENT_USER} />
      <ProfileNavButtons />
      <ProfileStats user={CURRENT_USER} />
      <div className="mt-2 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 space-y-6">
          <BasicInfo />
          <Photos images={IMAGE_URLS} />
          <Following users={USERS} visibleCount={6} />
          <Videos />
        </div>
        <Timeline posts={POSTS} />
      </div>
    </div>
  );
};

export default Profile;
