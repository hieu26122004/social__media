import { User } from "@/types/user";

export const CURRENT_USER: User = {
  uuid: "baeeeb7b-4e58-4833-956a-655206c2deee",
  firstName: "Nguyễn",
  lastName: "Huy Hiếu",
  email: "nguyenhuyhieu2004abc@gmail.com",
  profilePicture: "https://friendkit.cssninja.io/assets/img/avatars/jenna.png",
  roles: ["user"],
  createdAt: "2025-02-21T14:35:57.000Z",
  updatedAt: "2025-02-21T14:35:57.000Z",
};

export const USERS: User[] = [
  {
    uuid: "user1",
    firstName: "John",
    lastName: "Doe",
    email: "z2T7w@example.com",
    profilePicture:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
    roles: ["user"],
    createdAt: "2025-02-21T14:35:57.000Z",
    updatedAt: "2025-02-21T14:35:57.000Z",
    profile: {
      uuid: "profile1",
      userId: "user1",
      bio: "Passionate software developer with a love for outdoor adventures.",
      address: "123 Tech Street",
      city: "San Francisco",
      country: "USA",
      createdAt: "2025-02-21T14:35:57.000Z",
      updatedAt: "2025-02-21T14:35:57.000Z",
    },
  },
  {
    uuid: "user2",
    firstName: "Jane",
    lastName: "Smith",
    email: "V3TtR@example.com",
    profilePicture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    roles: ["user"],
    createdAt: "2025-02-21T14:35:57.000Z",
    updatedAt: "2025-02-21T14:35:57.000Z",
    profile: {
      uuid: "profile2",
      userId: "user2",
      bio: "Graphic designer and coffee enthusiast from the Pacific Northwest.",
      address: "456 Design Avenue",
      city: "Seattle",
      country: "USA",
      createdAt: "2025-02-21T14:35:57.000Z",
      updatedAt: "2025-02-21T14:35:57.000Z",
    },
  },
  {
    uuid: "user3",
    firstName: "Alex",
    lastName: "Brown",
    email: "5C9lQ@example.com",
    profilePicture:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100",
    roles: ["user"],
    createdAt: "2025-02-21T14:35:57.000Z",
    updatedAt: "2025-02-21T14:35:57.000Z",
    profile: {
      uuid: "profile3",
      userId: "user3",
      bio: "Data scientist exploring AI and machine learning innovations.",
      address: "789 Data Lane",
      city: "Boston",
      country: "USA",
      createdAt: "2025-02-21T14:35:57.000Z",
      updatedAt: "2025-02-21T14:35:57.000Z",
    },
  },
];

export const USER_STATS = [
  {
    ...USERS[0],
    followerCount: 150,
    followingCount: 80,
    postCount: 45,
  },
  {
    ...USERS[1],
    followerCount: 200,
    followingCount: 120,
    postCount: 60,
  },
  {
    ...USERS[2],
    followerCount: 180,
    followingCount: 90,
    postCount: 35,
  },
];
