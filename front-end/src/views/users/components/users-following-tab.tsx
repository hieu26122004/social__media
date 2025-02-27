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

const UsersFollowingTab: React.FC<Props> = () => {
  return (
    <TabContent value="following">
      <section aria-label="Following users content">Following</section>
    </TabContent>
  );
};

export default UsersFollowingTab;
