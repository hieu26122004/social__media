import { User } from "@/types/user";

type Props = {
  user: User & {
    followerCount: number;
    followingCount: number;
    postCount: number;
  };
};

const UserCard: React.FC<Props> = () => {
  return <div>UserCard</div>;
};

export default UserCard;
