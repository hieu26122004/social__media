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

const UsersSuggestTab: React.FC<Props> = () => {
  return (
    <TabContent value="all">
      <section
        aria-label="All users content"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="bg-red-500" key={index}>
            {index}
          </div>
        ))}
      </section>
    </TabContent>
  );
};

export default UsersSuggestTab;
