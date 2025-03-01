import {
  Archive,
  Award,
  Ban,
  BookOpen,
  Briefcase,
  CircleCheckBig,
  Clock,
  CloudDownload,
  CloudHail,
  Codepen,
  Codesandbox,
  Command,
  Cpu,
  CreditCard,
  Database,
  Flag,
  Gift,
  GithubIcon,
  Hexagon,
  LucideIcon,
  Mail,
  MessageCircle,
  Monitor,
  PanelsTopLeft,
  Search,
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

export type PrivacySettingId =
  | "publicProfile"
  | "publicPosts"
  | "freeTagging"
  | "publicList"
  | "seo";

export type PrivacySetting = {
  id: PrivacySettingId;
  label: string;
  description: string;
};

export const PRIVACY_OPTIONS: PrivacySetting[] = [
  {
    id: "publicProfile",
    label: "Public Profile",
    description: "Make your profile viewable by anyone.",
  },
  {
    id: "publicPosts",
    label: "Public Posts",
    description: "Make your posts viewable by anyone.",
  },
  {
    id: "freeTagging",
    label: "Free Tagging",
    description: "Disable tag verification before publishing.",
  },
  {
    id: "publicList",
    label: "Public List",
    description: "Make your friend list viewable by anyone.",
  },
  {
    id: "seo",
    label: "SEO",
    description: "Make your profile indexable by search engines.",
  },
];

export const PREFERENCE_ITEMS: SublinkItem[] = [
  {
    id: 1,
    title: "Devices",
    description: "Manage connected devices",
    Icon: Monitor,
  },
  {
    id: 2,
    title: "Authentication",
    description: "Authentication settings",
    Icon: Codesandbox,
  },
  {
    id: 3,
    title: "API",
    description: "Search settings",
    Icon: Search,
  },
  {
    id: 4,
    title: "Cloud Settings",
    description: "Manage storage",
    Icon: CloudHail,
  },
  {
    id: 5,
    title: "Cache",
    description: "Cache settings",
    Icon: Cpu,
  },
  {
    id: 6,
    title: "Reedeem",
    description: "Reedeem your points",
    Icon: Gift,
  },
  {
    id: 7,
    title: "Shortcuts",
    description: "Manage shortcuts",
    Icon: Command,
  },
  {
    id: 8,
    title: "Layout",
    description: "Layout settings",
    Icon: PanelsTopLeft,
  },
];

export type NotificationSettingId =
  | "notifications"
  | "sounds"
  | "friendRequest"
  | "newComment"
  | "newMessage"
  | "newParticipant"
  | "paymentStatus";

export type NotificationSetting = {
  id: NotificationSettingId;
  label: string;
  description: string;
};

export const NOTIFICATION_OPTIONS: NotificationSetting[] = [
  {
    id: "notifications",
    label: "Notifications",
    description: "Enable to activate notifications.",
  },
  {
    id: "sounds",
    label: "Sounds",
    description: "Enable to play a sound on new notification.",
  },
  {
    id: "friendRequest",
    label: "Friend Request",
    description: "Enable to receive friend request notifications.",
  },
  {
    id: "newComment",
    label: "New Comment",
    description: "Enable to receive new comment notifications.",
  },
  {
    id: "newMessage",
    label: "New Message",
    description: "Enable to receive new message notifications.",
  },
  {
    id: "newParticipant",
    label: "New Participant",
    description: "Enable to receive new participant notifications.",
  },
  {
    id: "paymentStatus",
    label: "Payment Status",
    description: "Enable to receive a notification on payment status change.",
  },
];

export const HELP_ITEMS: SublinkItem[] = [
  {
    id: 1,
    title: "User Guide",
    description: "Learn more about the app",
    Icon: BookOpen,
  },
  {
    id: 2,
    title: "Message",
    description: "Contact the support team",
    Icon: Mail,
  },
  {
    id: 3,
    title: "Chat",
    description: "Chat with support",
    Icon: MessageCircle,
  },
  {
    id: 4,
    title: "Blocked Users",
    description: "Manage blocked users",
    Icon: Ban,
  },
  {
    id: 5,
    title: "Archives",
    description: "Manage archives",
    Icon: Archive,
  },
  {
    id: 6,
    title: "Report",
    description: "Report offenses",
    Icon: Flag,
  },
  {
    id: 7,
    title: "Rewards",
    description: "See your rewards",
    Icon: Award,
  },
  {
    id: 8,
    title: "Partners",
    description: "Partner Programs",
    Icon: CircleCheckBig,
  },
  {
    id: 9,
    title: "Sponsors",
    description: "Sponsor programs",
    Icon: Briefcase,
  },
];
