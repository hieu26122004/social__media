import React from "react";
import { TabContent } from "@/components/tab/tab";
import { User } from "@/types/user";

type Props = {
  user: (User & {
    followerCount: number;
    followingCount: number;
    postCount: number;
  })[];
};

const UsersFollowerTab: React.FC<Props> = () => {
  return (
    <TabContent value="followers">
      <section aria-label="Followers users content">Followers</section>
    </TabContent>
  );
};

export default UsersFollowerTab;
