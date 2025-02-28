import React from "react";
import { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

type NavSectionProps = {
  items: {
    id: number;
    label: string;
    Icon: LucideIcon;
    path: string;
  }[];
};

export const NavSection: React.FC<NavSectionProps> = (props) => {
  const { items } = props;

  return (
    <ul className="my-5">
      {items.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

type NavItemProps = {
  label: string;
  Icon: LucideIcon;
  path: string;
};

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { Icon, label, path } = props;

  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          cn(
            "flex items-center gap-5 px-10 py-[14px]",
            isActive ? "border-l-4 border-accent" : ""
          )
        }
      >
        <Icon className="size-5" aria-hidden="true" />
        <span className="font-montserrat font-semibold text-[0.8rem]">
          {label}
        </span>
      </NavLink>
    </li>
  );
};

export const Divider = () => <hr className="mx-5 border-t" />;
