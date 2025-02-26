import React from "react";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Switch } from "@/components/common/switch";
import { Link } from "react-router-dom";
import useRegister from "./hooks/use-register";

const DEFAULT_USER_INFO = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const [userInfo, setUserInfo] = React.useState(DEFAULT_USER_INFO);
  const { isPending, mutate: register } = useRegister();

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(userInfo);
    setUserInfo(DEFAULT_USER_INFO);
  };

  return (
    <main className="max-w-[380px] mx-auto">
      <section className="min-h-screen flex flex-col items-center justify-center">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-normal text-foreground-header">
            Hey there!
          </h1>
          <p className="text-sm text-muted-foreground">
            Let’s create your account.
          </p>
        </header>

        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 gap-x-6 gap-y-6 w-full"
        >
          <div className="col-span-2 md:col-span-1 space-y-1">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              className="dark:bg-white"
              value={userInfo.firstName}
              onChange={handleUserInfoChange}
              required
              disabled={isPending}
            />
          </div>

          <div className="col-span-2 md:col-span-1 space-y-1">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              className="dark:bg-white"
              value={userInfo.lastName}
              onChange={handleUserInfoChange}
              required
              disabled={isPending}
            />
          </div>

          <div className="col-span-2 space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="dark:bg-white"
              value={userInfo.email}
              onChange={handleUserInfoChange}
              required
              disabled={isPending}
            />
          </div>

          <div className="col-span-2 space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="dark:bg-white"
              value={userInfo.password}
              onChange={handleUserInfoChange}
              required
              disabled={isPending}
            />
          </div>

          <div className="col-span-2 flex items-center gap-2">
            <Switch id="newsletter" disabled={isPending} />
            <label htmlFor="newsletter" className="text-sm">
              Subscribe to Newsletter?
            </label>
          </div>

          <Button type="submit" className="col-span-2" disabled={isPending}>
            {isPending ? "Creating Account..." : "Create Account"}
          </Button>
        </form>

        <footer className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Have an account?{" "}
            <Link
              to="/login"
              className="hover:text-accent transition-colors duration-300"
            >
              Sign In
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
};

export default Register;
