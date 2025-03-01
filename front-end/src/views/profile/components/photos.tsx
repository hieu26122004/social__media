import { Button } from "@/components/common/button";
import { EllipsisVertical } from "lucide-react";
import React from "react";

type Props = {
  images?: string[];
};

const Photos: React.FC<Props> = (props) => {
  const { images = [] } = props;

  return (
    <div className="w-full space-y-3">
      <div className="w-full bg-primary flex items-center justify-between py-2 px-4 rounded-lg">
        <h4 className="text-foreground-header font-medium">Photos</h4>
        <Button variant="ghost-muted" size="icon">
          <EllipsisVertical aria-hidden="true" className="size-5" />
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-y-3 gap-x-2">
        {images.map((item, index) => (
          <div key={index} className="aspect-square">
            <img
              src={item}
              alt="photo"
              className="h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
