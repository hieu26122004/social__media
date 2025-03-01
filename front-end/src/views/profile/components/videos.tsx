import { Button } from "@/components/common/button";
import { IMAGE_URLS } from "@/mocks/post";
import { EllipsisVertical } from "lucide-react";
import PLAY_ICON from "@assets/play.svg";

const Videos = () => {
  const VIDEOS = IMAGE_URLS.slice(0, 3);

  return (
    <div className="w-full space-y-3">
      <div className="w-full bg-primary flex items-center justify-between py-2 px-4 rounded-lg">
        <h4 className="text-foreground-header font-medium">Videos</h4>
        <Button variant="ghost-muted" size="icon">
          <EllipsisVertical aria-hidden="true" className="size-5" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-y-3 gap-x-2">
        {VIDEOS.map((item, index) => (
          <div key={index} className="aspect-square relative isolate">
            <img
              src={item}
              alt="video"
              className="h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <button className="size-9 inline-flex items-center justify-center rounded-full bg-accent text-white relative after:absolute after:size-9 after:bg-accent after:rounded-full after:animate-ping after:opacity-75 after:-z-10">
                <img
                  className="absolute size-4 left-[11px]"
                  src={PLAY_ICON}
                  alt="play"
                />
              </button>
            </div>
            <div className="absolute inset-0 bg-[#858d9a] opacity-50 rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
