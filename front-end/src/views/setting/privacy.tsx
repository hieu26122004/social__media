import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Menu } from "lucide-react";
import { Switch } from "@/components/common/switch";
import PRIVACY_IMG from "@assets/privacy-illustration.svg";
import { SidebarControls } from "./general";
import { PRIVACY_OPTIONS, PrivacySettingId } from "./constants";

const Privacy = () => {
  const { openSidebar } = useOutletContext<SidebarControls>();

  const [settings, setSettings] = React.useState({
    publicProfile: true,
    publicPosts: true,
    freeTagging: false,
    publicList: false,
    seo: false,
  });

  const handleToggle = (id: PrivacySettingId) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <article className="p-8 bg-primary rounded-lg shadow-md">
      <header className="flex items-center gap-4 mb-6">
        <button
          type="button"
          onClick={openSidebar}
          className="md:hidden p-2 text-foreground"
          aria-label="Open navigation sidebar"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
        <h1 className="font-montserrat text-xl text-foreground-header">
          Privacy Settings
        </h1>
      </header>

      <main className="flex flex-col lg:flex-row gap-8">
        <section className="flex-1">
          <div className="space-y-6">
            {PRIVACY_OPTIONS.map(({ id, description, label }) => (
              <div key={id} className="flex items-center gap-4">
                <Switch
                  checked={settings[id]}
                  onCheckedChange={() => handleToggle(id)}
                  aria-label={`Toggle ${label}`}
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground-header font-montserrat">
                    {label}
                  </h4>
                  <p className="text-sm text-foreground">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="p-6 rounded-lg lg:max-w-xs">
          <img
            src={PRIVACY_IMG}
            alt="Illustration of privacy settings"
            className="max-w-52 mx-auto"
            loading="lazy"
          />
          <p className="text-sm text-foreground mt-4 text-center max-w-72">
            Learn more about privacy settings in the{" "}
            <Link
              to=""
              className="text-accent underline hover:text-accent-dark"
            >
              user guide
            </Link>
            .
          </p>
        </aside>
      </main>
    </article>
  );
};

export default Privacy;
