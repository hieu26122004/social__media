import { Link, useOutletContext } from "react-router-dom";
import { SidebarControls } from "./general";
import { Lock, Menu, Smartphone } from "lucide-react";
import { useState } from "react";
import Input from "./components/input";
import SECURITY_IMG from "@assets/security-illustration.svg";
import { Switch } from "@/components/common/switch";
import { Button } from "@/components/common/button";

const Security = () => {
  const { openSidebar } = useOutletContext<SidebarControls>();

  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    repeat_password: "",
    phone_number: "",
    twoFactorEnabled: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <article className="p-[30px] bg-primary rounded-lg shadow-md">
      <header className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={openSidebar}
          className="size-8 md:hidden inline-flex items-center justify-center text-foreground"
          aria-label="Open navigation sidebar"
        >
          <Menu aria-hidden="true" />
        </button>
        <h1 className="font-montserrat text-foreground-header text-xl font-normal">
          Security
        </h1>
      </header>
      <main className="flex flex-col items-start lg:flex-row gap-8">
        <section className="flex-1 lg:w-fit w-full">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <Input
              label="Current Password "
              Icon={Lock}
              type="password"
              name="current_password"
              id="current_password"
              value={formData.current_password}
              onChange={handleChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                type="password"
                label="New Password"
                name="new_password"
                id="new_password"
                value={formData.new_password}
                onChange={handleChange}
                Icon={Lock}
              />
              <Input
                type="password"
                label="Repeat Password"
                name="repeat_password"
                id="repeat_password"
                value={formData.repeat_password}
                onChange={handleChange}
                Icon={Lock}
              />
            </div>
            <p className="text-sm text-foreground max-w-[84ch] mt-2">
              You can enable 2 factor authentication anytime to improve your
              account privacy and security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center gap-3">
                <Switch
                  className="flex-shrink-0"
                  checked={formData.twoFactorEnabled}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({
                      ...prev,
                      twoFactorEnabled: checked,
                    }))
                  }
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground-header font-montserrat">
                    Enable 2 factor auth
                  </h4>
                  <p className="text-[0.8rem] text-foreground">
                    This will send an additional code to your phone number.
                  </p>
                </div>
              </div>
              <Input
                id="phone_number"
                name="phone_number"
                label="Phone Number"
                type="tel"
                value={formData.phone_number}
                onChange={handleChange}
                Icon={Smartphone}
              />
            </div>
            <div className="flex items-center gap-6 mt-6">
              <Button type="submit" className="min-w-36">
                Save Changes
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="min-w-36 border"
              >
                Advanced
              </Button>
            </div>
          </form>
        </section>
        <aside className="p-10 rounded-lg">
          <img
            src={SECURITY_IMG}
            alt="Illustration of general settings"
            className="max-w-52 mx-auto"
            loading="lazy"
          />
          <p className="text-sm text-foreground mt-5 max-w-72 mx-auto">
            If you&apos;d like to learn more about general settings, you can
            read about it in the{" "}
            <Link
              to=""
              className="text-accent underline hover:text-accent-dark"
            >
              user guide
            </Link>
          </p>
        </aside>
      </main>
    </article>
  );
};

export default Security;
