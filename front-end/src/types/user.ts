export type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  coverPicture?: string;
  profilePicture?: string;
  roles: string[];
  createdAt: string;
  updatedAt: string;
};
