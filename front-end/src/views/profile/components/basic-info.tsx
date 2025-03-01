import React from "react";
import { Button } from "@/components/common/button";
import { EllipsisVertical, LucideIcon } from "lucide-react";
import { INFO_ITEMS } from "../constants";

const BasicInfo = () => {
  return (
    <div className="w-full space-y-3">
      <div className="w-full bg-primary flex items-center justify-between py-2 px-4 rounded-lg">
        <h4 className="text-foreground-header font-medium">Basic Infos</h4>
        <Button variant="ghost-muted" size="icon">
          <EllipsisVertical aria-hidden="true" className="size-5" />
        </Button>
      </div>
      <div className="bg-primary border rounded-lg divide-y">
        {INFO_ITEMS.map((item) => (
          <InfoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

type InfoItemProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const InfoItem: React.FC<InfoItemProps> = (props) => {
  const { Icon, description, title } = props;

  return (
    <div className="flex items-center justify-between py-[10px] px-4">
      <div>
        <h4 className="text-foreground-header font-medium text-sm">{title}</h4>
        <p className="text-foreground font-normal text-sm">{description}</p>
      </div>
      <Icon className="size-5" aria-hidden="true" />
    </div>
  );
};

export default BasicInfo;
