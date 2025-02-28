import { Outlet } from "react-router-dom";
import Header from "./components/header";
import { cn } from "@/lib/utils";
import { HEADER_HEIGHT } from "@/constants/app.constants";

const AuthLayout = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <main
        className={cn(
          "w-full p-5 flex items-center justify-center",
          `min-h-[calc(100vh-${HEADER_HEIGHT})]`
        )}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
