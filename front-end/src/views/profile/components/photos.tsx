import React from "react";
import { Button } from "@/components/common/button";
import { PATHS } from "@/constants/path";
import { Image } from "@/types/post";
import { EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  images?: Image[];
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
        {images.map((item) => (
          <Link
            key={item.uuid}
            to={PATHS.POST_DETAIL.replace(":postId", item.postId.toString())}
          >
            <div className="aspect-square">
              <img
                src={item.url}
                alt="photo"
                className="h-full object-cover rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Photos;
