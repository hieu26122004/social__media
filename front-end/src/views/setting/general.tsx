import React, { useState } from "react";
import { Mail, MapPin, Menu, User } from "lucide-react";
import { Link, useOutletContext } from "react-router-dom";
import Input from "./components/input";
import { Button } from "@/components/common/button";
import SETTING_IMG from "@assets/setting-illustration.svg";
import { useAppSelector } from "@/store/hook";
import SelectCountry from "./components/select-country";
import useUpdateMe from "./hooks/use-update-me";

export type SidebarControls = {
  closeSidebar: () => void;
  openSidebar: () => void;
  toggleSidebar: () => void;
};

const DEFAULT_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  backupEmail: "",
  address: "",
  city: "",
  country: "",
  bio: "",
};

const General: React.FC = () => {
  const { openSidebar } = useOutletContext<SidebarControls>();
  const { user } = useAppSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: user!.firstName,
    lastName: user!.lastName,
    email: user!.email,
    backupEmail: "",
    address: user?.profile?.address || "",
    city: user?.profile?.city || "",
    country: user?.profile?.country || "",
    bio: user?.profile?.bio || "",
  });
  const { mutate: updateMe, isPending } = useUpdateMe();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMe(formData);
    setFormData(DEFAULT_FORM_DATA);
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
          General Settings
        </h1>
      </header>

      <main className="flex flex-col items-start lg:flex-row gap-8">
        <section className="flex-1">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                type="text"
                label="First Name"
                name="firstName"
                Icon={User}
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                type="text"
                label="Last Name"
                name="lastName"
                Icon={User}
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input
                type="email"
                label="Email"
                name="email"
                Icon={Mail}
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                type="email"
                label="Backup Email"
                name="backupEmail"
                Icon={Mail}
                value={formData.backupEmail}
                onChange={handleChange}
              />
            </div>
            <Input
              type="text"
              label="Address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="Bio"
              name="bio"
              placeholder="Tell us about yourself"
              value={formData.bio}
              onChange={handleChange}
            />
            <p className="text-sm text-foreground max-w-[84ch] mt-2">
              Be sure to fill out your location settings. This will help us
              suggest relevant friends and places you might like.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 relative isolate">
              <Input
                type="text"
                label="City"
                name="city"
                Icon={MapPin}
                value={formData.city}
                onChange={handleChange}
              />
              <SelectCountry
                value={formData.country}
                onCountryChange={(country: string) =>
                  setFormData((prev) => ({ ...prev, country }))
                }
              />
              <div className="flex items-center gap-6 mt-6">
                <Button type="submit" className="min-w-36" disabled={isPending}>
                  {isPending ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  className="min-w-36 border"
                >
                  Advanced
                </Button>
              </div>
            </div>
          </form>
        </section>

        <aside className="p-10 rounded-lg">
          <img
            src={SETTING_IMG}
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

export default General;
