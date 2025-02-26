import { Outlet } from "react-router-dom";
import Header from "./components/header";

const AuthLayout = () => {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <main className="w-full min-h-[calc(100vh-56px)] p-5 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
