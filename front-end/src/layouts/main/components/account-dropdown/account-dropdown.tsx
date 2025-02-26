import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { getFullName, getShortName } from "@/helpers/name";
import DropdownItem from "./dropdown-item";
import { ACTION_ITEMS, COMPANY_ITEMS } from "../../constants";
import UserInfo from "./user-info";
import { useAppSelector } from "@/store/hook";

const AccountDropdown = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarFallback className="select-none">
            {getShortName(user)}
          </AvatarFallback>
          <AvatarImage src={user!.profilePicture} alt={user!.lastName} />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] p-2">
        <div className="flex items-center justify-between rounded-sm p-2">
          <span className="text-xs font-semibold uppercase">
            {getFullName(user)}
          </span>
          <ModeToggle />
        </div>
        <DropdownMenuSeparator />
        <UserInfo user={user!} />
        <DropdownMenuSeparator />
        {COMPANY_ITEMS.map((item) => (
          <DropdownItem key={item.id} IconOrImage={item.icon} {...item} />
        ))}
        <DropdownMenuSeparator />
        {ACTION_ITEMS.map((item) => (
          <DropdownItem key={item.id} IconOrImage={item.icon} {...item} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
