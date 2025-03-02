import React from "react";
import BG_COVER from "@assets/bg-cover.png";
import { Camera, EllipsisVertical, Plus } from "lucide-react";
import { Button } from "@/components/common/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { getFullName, getShortName } from "@/helpers/name";
import { User } from "@/types/user";

type Props = {
  user: User;
  profilePicture?: File;
  coverPicture?: File;
  onProfilePictureChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCoverPictureChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CoverImage: React.FC<Props> = (props) => {
  const {
    user,
    onCoverPictureChange,
    onProfilePictureChange,
    coverPicture,
    profilePicture,
  } = props;

  const coverPictureUrl = coverPicture
    ? URL.createObjectURL(coverPicture)
    : user.coverPicture || BG_COVER;
  const profilePictureUrl = profilePicture
    ? URL.createObjectURL(profilePicture)
    : user.profilePicture || "";

  React.useEffect(() => {
    return () => {
      if (coverPicture) URL.revokeObjectURL(coverPictureUrl);
      if (profilePicture) URL.revokeObjectURL(profilePictureUrl);
    };
  }, [coverPicture, profilePicture, coverPictureUrl, profilePictureUrl]);

  return (
    <div className="relative isolate group">
      <img
        src={coverPictureUrl}
        className="min-h-44 max-h-80 w-full rounded object-cover"
        alt="User cover picture"
        loading="eager"
      />
      <label
        htmlFor="cover-picture"
        className="inline-flex items-center gap-3 p-2 absolute top-3 left-3 transition-all duration-300 border group-hover:border-white border-transparent rounded cursor-pointer"
        aria-label="Edit cover picture"
      >
        <Camera className="size-6 stroke-white fill-transparent transition-transform duration-300 group-hover:scale-90" />
        <span className="text-sm text-white font-normal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Edit cover image
        </span>
        <input
          type="file"
          className="hidden"
          id="cover-picture"
          onChange={onCoverPictureChange}
          accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
        />
      </label>
      <Button
        variant="ghost-muted"
        size="icon"
        className="absolute top-3 right-3 [&>svg]:size-6 [&>svg]:stroke-foreground-header"
        aria-label="More options"
      >
        <EllipsisVertical aria-hidden="true" />
      </Button>
      <div className="flex items-center justify-center absolute -bottom-12 left-1/2 -translate-x-1/2">
        <div className="relative isolate">
          <Avatar className="size-28">
            <AvatarFallback>{getShortName(user)}</AvatarFallback>
            <AvatarImage src={profilePictureUrl} alt={getFullName(user)} />
          </Avatar>
          <label
            htmlFor="profile-picture"
            className="size-[34px] bg-accent-600 rounded-full absolute bottom-0 right-0 z-10 flex items-center justify-center cursor-pointer"
            aria-label="Edit profile picture"
          >
            <input
              type="file"
              className="hidden"
              id="profile-picture"
              onChange={onProfilePictureChange}
              accept="image/jpeg,image/png,image/jpg,image/gif,image/webp"
            />
            <Plus className="size-5 stroke-white" aria-hidden="true" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
