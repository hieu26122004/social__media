import { PATHS } from "@/constants/path";
import {
  Bell,
  LifeBuoy,
  Lock,
  Settings,
  Shield,
  SlidersVertical,
  TriangleAlert,
} from "lucide-react";

export const SIDEBAR_WIDTH = "256px";
export const SIDEBAR_WIDTH_LG = "288px";

export const NAV_ITEMS = [
  { id: 1, label: "General", Icon: Settings, path: PATHS.SETTING },
  { id: 2, label: "Security", Icon: Shield, path: PATHS.SECURITY },
  {
    id: 3,
    label: "Account",
    Icon: TriangleAlert,
    path: PATHS.ACCOUNT,
  },
  { id: 4, label: "Privacy", Icon: Lock, path: PATHS.PRIVACY },
  {
    id: 5,
    label: "Preferences",
    Icon: SlidersVertical,
    path: PATHS.PREFERENCES,
  },
  {
    id: 6,
    label: "Notifications",
    Icon: Bell,
    path: PATHS.NOTIFICATIONS,
  },
  { id: 7, label: "Help", Icon: LifeBuoy, path: PATHS.HELP },
];
