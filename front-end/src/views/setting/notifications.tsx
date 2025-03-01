import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { SidebarControls } from "./general";
import { Menu } from "lucide-react";
import { NOTIFICATION_OPTIONS, NotificationSettingId } from "./constants";
import NOTIFICATION_IMG from "@assets/notification-illustration.svg";
import { Switch } from "@/components/common/switch";

const Notifications = () => {
  const { openSidebar } = useOutletContext<SidebarControls>();
  const [settings, setSettings] = React.useState({
    notifications: true,
    sounds: true,
    friendRequest: false,
    newComment: false,
    newMessage: false,
    newParticipant: false,
    paymentStatus: false,
  });

  const handleToggle = (id: NotificationSettingId) => {
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
            <div className="space-y-4">
              <h3 className="text-sm font-light uppercase">
                General notifications
              </h3>
              {NOTIFICATION_OPTIONS.slice(0, 2).map(
                ({ id, description, label }) => (
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
                )
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-light uppercase">
                Social notifications
              </h3>
              {NOTIFICATION_OPTIONS.slice(2, 4).map(
                ({ id, description, label }) => (
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
                )
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-light uppercase">
                Chat notifications
              </h3>
              {NOTIFICATION_OPTIONS.slice(4, 6).map(
                ({ id, description, label }) => (
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
                )
              )}
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-light uppercase">
                Payment notifications
              </h3>
              {NOTIFICATION_OPTIONS.slice(6).map(
                ({ id, description, label }) => (
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
                )
              )}
            </div>
          </div>
        </section>

        <aside className="p-6 rounded-lg lg:max-w-xs">
          <img
            src={NOTIFICATION_IMG}
            alt="Illustration of privacy settings"
            className="max-w-52 mx-auto"
            loading="lazy"
          />
          <p className="text-sm text-foreground mt-4 text-center max-w-72">
            If you'd like to learn more about notifications settings, you can
            read about it in the{" "}
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

export default Notifications;
