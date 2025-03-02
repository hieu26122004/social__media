import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/common/avatar";
import { DropdownMenuItem } from "@/components/common/dropdown-menu";
import { LucideIcon } from "lucide-react";
import React from "react";
import useLogout from "../../hooks/use-logout";

type Props = {
  IconOrImage: LucideIcon | string;
  title: string;
  description: string;
};

const DropdownItem: React.FC<Props> = ({ IconOrImage, title, description }) => {
  const { mutate: logout } = useLogout();

  return (
    <DropdownMenuItem
      className="flex items-center gap-4"
      onClick={title === "Logout" ? () => logout() : undefined}
    >
      {typeof IconOrImage === "string" ? (
        <Avatar className="size-9">
          <AvatarFallback>{title}</AvatarFallback>
          <AvatarImage src={IconOrImage} alt={title} />
        </Avatar>
      ) : (
        <div className="size-9 flex items-center justify-center">
          <IconOrImage className="size-5" />
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>{" "}
      </div>
    </DropdownMenuItem>
  );
};

export default DropdownItem;
