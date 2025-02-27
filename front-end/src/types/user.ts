export type Profile = {
  uuid: string;
  userId: string;
  bio: string;
  address: string;
  city: string;
  country: string;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  coverPicture?: string;
  profilePicture?: string;
  roles: string[];
  profile?: Profile;
  createdAt: string;
  updatedAt: string;
};
