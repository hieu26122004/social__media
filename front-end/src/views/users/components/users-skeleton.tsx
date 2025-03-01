import React from "react";
import { Skeleton } from "@/components/common/skeleton";
import Tabs, { TabContent, TabsItem, TabsList } from "@/components/tab/tab";
import { Filter, Search } from "lucide-react";

const UserSkeletonItem: React.FC = () => (
  <div className="bg-primary border rounded p-5">
    <div className="flex flex-col items-center gap-3">
      <Skeleton className="size-[90px] rounded-full" />
      <div className="w-full flex flex-col items-center gap-3">
        <Skeleton className="w-1/3 h-3" />
        <Skeleton className="w-1/2 h-3" />
      </div>
      <Skeleton className="w-full h-20" />
    </div>
  </div>
);

const UsersSkeleton: React.FC = () => {
  const skeletonCount = 12;

  const renderSkeletonList = () =>
    Array.from({ length: skeletonCount }).map((_, index) => (
      <UserSkeletonItem key={index} />
    ));

  return (
    <Tabs defaultTab="all" className="w-full min-h-screen bg-background pb-16">
      <header className="w-full bg-primary">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between h-12 px-4">
          <div className="flex items-center gap-4">
            <Filter className="size-4 cursor-pointer" aria-hidden="true" />
            <nav className="w-56">
              <TabsList>
                <TabsItem value="all">All</TabsItem>
                <TabsItem value="following">Following</TabsItem>
                <TabsItem value="followers">Followers</TabsItem>
              </TabsList>
            </nav>
          </div>
          <div className="hidden lg:flex items-center divide-x">
            <span className="px-5" aria-label="Friends count">
              979 friends
            </span>
            <button
              type="button"
              className="inline-flex items-center justify-center size-12 [&>svg]:size-4"
              aria-label="Search users"
            >
              <Search aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <main className="w-full px-5">
        <div className="max-w-[1200px] mx-auto mt-5">
          {["all", "followers", "following"].map((tabValue) => (
            <TabContent key={tabValue} value={tabValue}>
              <section
                aria-label={`${tabValue} users content`}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {renderSkeletonList()}
              </section>
            </TabContent>
          ))}
        </div>
      </main>
    </Tabs>
  );
};

export default UsersSkeleton;
