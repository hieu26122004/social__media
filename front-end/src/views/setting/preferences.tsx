import { Link, useOutletContext } from "react-router-dom";
import { SidebarControls } from "./general";
import { Menu } from "lucide-react";
import { PREFERENCE_ITEMS } from "./constants";
import PREFERENCES_IMG from "@assets/preferences-illustration.svg";
import SettingSublink from "./components/setting-sublink";

const Preferences = () => {
  const { openSidebar } = useOutletContext<SidebarControls>();

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
        <section className="w-full lg:w-fit grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREFERENCE_ITEMS.map((item) => (
            <SettingSublink {...item} key={item.id} />
          ))}
        </section>
        <aside className="p-10 rounded-lg">
          <img
            src={PREFERENCES_IMG}
            alt="Illustration of general settings"
            className="max-w-52 mx-auto"
            loading="lazy"
          />
          <p className="text-sm text-foreground mt-5 max-w-72 mx-auto">
            If you'd like to learn more about preferences settings, you can read
            about it in the.{" "}
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

export default Preferences;
