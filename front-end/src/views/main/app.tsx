import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "@/constants/path";
import NotFound from "../not-found";
import AuthLayout from "@/layouts/auth/auth-layout";
import Login from "../auth/login";
import Register from "../auth/register";
import MainLayout from "@/layouts/main/main-layout";
import Home from "../home/home";
import Authentication from "@/components/authentication";
import PostDetail from "../post-detail/post-detail";
import DeletePost from "../delete-post/delete-post";
import Users from "../users/users";
import General from "../setting/general";
import SettingLayout from "@/layouts/setting/setting-layout";

const App: React.FC = () => {
  return (
    <div
      className="app-container min-h-screen dark:bg-gray-900"
      aria-label="Application container"
    >
      <Toaster
        position="top-center"
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
      />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.REGISTER} element={<Register />} />
        </Route>
        <Route element={<Authentication />}>
          <Route element={<MainLayout />}>
            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.USERS} element={<Users />} />
            <Route element={<SettingLayout />}>
              <Route path={PATHS.SETTING} element={<General />} />
            </Route>
          </Route>
          <Route path={PATHS.POST_DETAIL} element={<PostDetail />} />
          <Route path={PATHS.DELETE_POST} element={<DeletePost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
