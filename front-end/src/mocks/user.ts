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
  },
];
