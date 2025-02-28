import React from "react";
import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const SettingSublink: React.FC<Props> = (props) => {
  const { Icon, description, title } = props;

  return (
    <div className="flex items-center p-4 border rounded cursor-pointer">
      <div className="space-y-3">
        <div className="bg-muted size-9 inline-flex items-center justify-center border rounded-full [&>svg]:size-4">
          <Icon aria-hidden="true" />
        </div>
        <div className="text-xs">
          <h4 className="text-foreground-header font-normal leading-none">
            {title}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingSublink;
