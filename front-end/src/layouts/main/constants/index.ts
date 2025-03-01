import {
  Bell,
  Heart,
  LayoutGrid,
  Settings,
  CircleHelp,
  Power,
} from "lucide-react";
import CSS_NINJA from "@assets/css-ninja.svg";
import FAST_PIZZA from "@assets/fast-pizza.svg";
import SLICER from "@assets/slicer.svg";
import FEED from "@assets/feed.svg";
import FRIEND from "@assets/user.svg";
import VIDEOS from "@assets/videos.svg";
import PAGES from "@assets/pages.svg";
import CART from "@assets/cart.svg";
import HOUSE from "@assets/house.svg";
import CHRONO from "@assets/chrono.svg";
import QUESTION from "@assets/question.svg";
import NEWS from "@assets/news.svg";
import CAKE from "@assets/cake.svg";
import ENVATO from "@assets/envato.svg";
import CALENDAR from "@assets/calendar.svg";
import PIN from "@assets/pin.svg";
import IDEA from "@assets/idea.svg";
import SETTINGS from "@assets/settings.svg";
import { PATHS } from "@/constants/path";

export const NAV_ITEMS = [
  {
    id: 1,
    label: "Heart",
    icon: Heart,
    active: false,
  },
  {
    id: 2,
    label: "Bell",
    icon: Bell,
    active: false,
  },
  // {
  //   id: 3,
  //   label: "Mail",
  //   icon: Mail,
  //   active: true,
  // },
  {
    id: 4,
    label: "Explorer",
    icon: LayoutGrid,
    active: false,
  },
];

export const COMPANY_ITEMS = [
  { id: 1, icon: CSS_NINJA, title: "CSS Ninja", description: "Company page" },
  { id: 2, icon: FAST_PIZZA, title: "Fast Pizza", description: "Company page" },
  { id: 3, icon: SLICER, title: "Slicer", description: "Company page" },
];

export const ACTION_ITEMS = [
  {
    id: 1,
    icon: Settings,
    title: "Setting",
    description: "Access widget settings",
  },
  {
    id: 2,
    icon: CircleHelp,
    title: "Help",
    description: "Contact our support team",
  },
  {
    id: 3,
    icon: Power,
    title: "Logout",
    description: "Logout from your account",
  },
];

export const EXPLORER_ITEMS = [
  { id: 1, image: FEED, label: "Feed", path: PATHS.HOME },
  { id: 2, image: FRIEND, label: "Users", path: PATHS.USERS },
  { id: 3, image: VIDEOS, label: "Videos", path: PATHS.HOME },
  { id: 4, image: PAGES, label: "Pages", path: PATHS.HOME },
  { id: 5, image: CART, label: "Commerce", path: PATHS.HOME },
  { id: 6, image: HOUSE, label: "Interests", path: PATHS.HOME },
  { id: 7, image: CHRONO, label: "Stories", path: PATHS.HOME },
  { id: 8, image: QUESTION, label: "Questions", path: PATHS.HOME },
  { id: 9, image: NEWS, label: "News", path: PATHS.NEWS },
  { id: 10, image: CAKE, label: "Groups", path: PATHS.HOME },
  { id: 11, image: ENVATO, label: "Envato", path: PATHS.HOME },
  { id: 12, image: CALENDAR, label: "Events", path: PATHS.HOME },
  { id: 13, image: PIN, label: "CSS Ninja", path: PATHS.HOME },
  { id: 14, image: IDEA, label: "Elements", path: PATHS.HOME },
  { id: 15, image: SETTINGS, label: "Settings", path: PATHS.SETTING },
];
