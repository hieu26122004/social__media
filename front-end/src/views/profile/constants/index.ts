import {
  BellRing,
  BookOpen,
  Earth,
  Heart,
  LucideIcon,
  MapPin,
} from "lucide-react";

type InfoItem = {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const INFO_ITEMS: InfoItem[] = [
  {
    id: 1,
    title: "Studied at",
    description: "Georgetown University",
    Icon: BookOpen,
  },
  {
    id: 2,
    title: "Married to",
    description: "Dan Walker",
    Icon: Heart,
  },
  {
    id: 3,
    title: "From",
    description: "Melbourne, AU",
    Icon: Earth,
  },
  {
    id: 4,
    title: "Lives in",
    description: "Los Angeles, CA",
    Icon: MapPin,
  },
  {
    id: 5,
    title: "Followers",
    description: "258 followers",
    Icon: BellRing,
  },
];
