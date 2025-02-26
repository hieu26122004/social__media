import {
  AtSign,
  CloudDrizzle,
  CloudFog,
  CloudRain,
  Cloudy,
  Gift,
  Image,
  Smile,
  Sun,
} from "lucide-react";

export const ACTION_BUTTONS = [
  { id: 1, label: "activity", Icon: Smile },
  { id: 2, label: "upload-image", Icon: Image },
  { id: 3, label: "gif", Icon: Gift },
  { id: 4, label: "tag-friend", Icon: AtSign },
];

export const FORECAST_DATA = [
  { day: "MON", icon: Sun, temp: 20 },
  { day: "TUE", icon: CloudDrizzle, temp: 23 },
  { day: "WED", icon: CloudFog, temp: 21 },
  { day: "THU", icon: Cloudy, temp: 20 },
  { day: "FRI", icon: Sun, temp: 20 },
  { day: "SAT", icon: CloudRain, temp: 19 },
  { day: "SUN", icon: Sun, temp: 18 },
];
