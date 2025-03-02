import CoverImage from "./components/cover-image";
import ProfileNavButtons from "./components/profile-nav-buttons";
import ProfileStats from "./components/profile-stats";
import BasicInfo from "./components/basic-info";
import Photos from "./components/photos";
import Following from "./components/following";
import Videos from "./components/videos";
import Timeline from "./components/timeline";
import { useParams } from "react-router-dom";
import useGetUser from "./hooks/use-get-user";
import useGetUserImages from "./hooks/use-get-user-images";
import useGetUserPosts from "./hooks/use-get-user-posts";
import useGetFollowing from "../home/hooks/use-get-following";
import React from "react";
import useUpdateImages from "./hooks/use-update-images";

const Profile = () => {
  const { userId } = useParams<{ userId: string }>();
  const { mutate: updateImages } = useUpdateImages();
  const [coverPicture, setCoverPicture] = React.useState<File>();
  const [profilePicture, setProfilePicture] = React.useState<File>();
  const { data: user, isFetching: isFetchingUser } = useGetUser(userId!);
  const { data: images, isFetching: isFetchingImages } = useGetUserImages(
    userId!
  );
  const { data: posts, isFetching: isFetchingPosts } = useGetUserPosts(userId!);
  const { data: users, isFetching: isFetchingFollowing } = useGetFollowing(
    userId!
  );
  const loading =
    isFetchingUser ||
    isFetchingImages ||
    isFetchingPosts ||
    isFetchingFollowing;

  const handleProfilePictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) setProfilePicture(file);
  };

  const handleCoverPictureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) setCoverPicture(file);
  };

  React.useEffect(() => {
    return () => {
      if (profilePicture || coverPicture) {
        updateImages({ profilePicture, coverPicture });
        setCoverPicture(undefined);
        setProfilePicture(undefined);
      }
    };
  }, [profilePicture, coverPicture, updateImages]);

  if (loading) return <div>loading...</div>;

  return (
    <div className="max-w-[1140px] mx-auto p-3">
      <CoverImage
        user={user!}
        profilePicture={profilePicture}
        coverPicture={coverPicture}
        onProfilePictureChange={handleProfilePictureChange}
        onCoverPictureChange={handleCoverPictureChange}
      />
      <ProfileNavButtons />
      <ProfileStats user={user!} />
      <div className="mt-2 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 space-y-6">
          <BasicInfo />
          <Photos images={images!} />
          <Following users={users} visibleCount={6} />
          <Videos />
        </div>
        <Timeline posts={posts} />
      </div>
    </div>
  );
};

export default Profile;
