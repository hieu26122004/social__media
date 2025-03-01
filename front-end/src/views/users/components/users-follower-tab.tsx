import React from "react";
import { TabContent } from "@/components/tab/tab";
import { User } from "@/types/user";
import UserCard from "./user-card";

type Props = {
  users: (User & {
    followerCount: number;
    followingCount: number;
    postCount: number;
  })[];
};

const UsersFollowerTab: React.FC<Props> = (props) => {
  const { users } = props;

  return (
    <TabContent value="followers">
      <section aria-label="All users content">
        {users.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map((item) => (
              <UserCard user={item} key={item.uuid} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-foreground">No followers found</p>
          </div>
        )}
      </section>
    </TabContent>
  );
};

export default UsersFollowerTab;
