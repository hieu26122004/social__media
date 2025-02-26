import React from "react";
import LOGIN_IMG from "@assets/login-img.svg";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Switch } from "@/components/common/switch";
import { Link } from "react-router-dom";
import useLogin from "./hooks/use-login";

const DEFAULT_CREDENTIALS = {
  email: "",
  password: "",
};

const Login = () => {
  const [credentials, setCredentials] = React.useState(DEFAULT_CREDENTIALS);
  const { isPending, mutate: login } = useLogin();

  const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(credentials);
    setCredentials(DEFAULT_CREDENTIALS);
  };

  return (
    <main className="max-w-[1152px] mx-auto">
      <section className="flex items-center justify-center min-h-screen">
        {/* Image Section */}
        <div className="flex-1 hidden md:block">
          <img src={LOGIN_IMG} alt="Login illustration" className="w-[620px]" />
        </div>

        {/* Form Section */}
        <div className="flex-1 flex flex-col items-center">
          <header className="text-center mb-6">
            <h1 className="text-2xl font-normal text-foreground-header">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to sign in.
            </p>
          </header>

          <form onSubmit={handleFormSubmit} className="w-[380px] space-y-6">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="dark:bg-white"
                value={credentials.email}
                onChange={handleCredentialsChange}
                required
                disabled={isPending}
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="dark:bg-white"
                value={credentials.password}
                onChange={handleCredentialsChange}
                required
                disabled={isPending}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch id="remember-me" disabled={isPending} />
                <label htmlFor="remember-me" className="text-sm">
                  Remember Me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm hover:text-accent transition-colors duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </form>

          <footer className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="hover:text-accent transition-colors duration-300"
              >
                Sign Up
              </Link>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default Login;
