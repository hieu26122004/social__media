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

export const NAV_ITEMS = [
  { id: 1, label: "General", Icon: Settings, path: PATHS.SETTING },
  { id: 2, label: "Security", Icon: Shield, path: `${PATHS.SETTING}/security` },
  {
    id: 3,
    label: "Account",
    Icon: TriangleAlert,
    path: `${PATHS.SETTING}/account`,
  },
  { id: 4, label: "Privacy", Icon: Lock, path: `${PATHS.SETTING}/privacy` },
  {
    id: 5,
    label: "Preferences",
    Icon: SlidersVertical,
    path: `${PATHS.SETTING}/preferences`,
  },
  {
    id: 6,
    label: "Notifications",
    Icon: Bell,
    path: `${PATHS.SETTING}/notifications`,
  },
  { id: 7, label: "Help", Icon: LifeBuoy, path: `${PATHS.SETTING}/help` },
];
