import {
  Clock,
  CloudDownload,
  Codepen,
  CreditCard,
  Database,
  GithubIcon,
  Hexagon,
  LucideIcon,
  ShoppingCart,
  User,
} from "lucide-react";

type SublinkItem = {
  id: number;
  Icon: LucideIcon;
  title: string;
  description: string;
};

export const SUBLINK_ITEMS: SublinkItem[] = [
  {
    id: 1,
    Icon: User,
    title: "Personal Info",
    description: "Access your personal info",
  },
  {
    id: 2,
    Icon: Clock,
    title: "History",
    description: "Access private history",
  },
  {
    id: 3,
    Icon: CloudDownload,
    title: "Download",
    description: "Download your data",
  },
  {
    id: 4,
    Icon: Codepen,
    title: "Connected Apps",
    description: "Manage connected apps",
  },
  {
    id: 5,
    Icon: CreditCard,
    title: "Payment Info",
    description: "Manage account info",
  },
  {
    id: 6,
    Icon: Hexagon,
    title: "Account",
    description: "Manage account info",
  },
  {
    id: 7,
    Icon: GithubIcon,
    title: "Integrations",
    description: "Manage integrations",
  },
  {
    id: 8,
    Icon: ShoppingCart,
    title: "Shop Settings",
    description: "Manage your store",
  },
  {
    id: 9,
    Icon: Database,
    title: "System Settings",
    description: "Manage preferences",
  },
];
