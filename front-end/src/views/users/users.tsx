import Tabs, { TabContent, TabsItem } from "@/components/tab/tab";

const Users = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="w-full bg-primary">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between">
          <Tabs defaultTab="all">
            <TabsItem value="all">All</TabsItem>
            <TabsItem value="following">Following</TabsItem>
            <TabsItem value="followers">Followers</TabsItem>
            <TabContent value="all">Tab All</TabContent>
            <TabContent value="following">Tab Following</TabContent>
            <TabContent value="followers">Tab Followers</TabContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Users;
