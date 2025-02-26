import { Button } from "@/components/common/button";
import { Share, X } from "lucide-react";
import React from "react";

type Props = {
  onClose: () => void;
  onShare: () => void;
};

const PostAside: React.FC<Props> = (props) => {
  const { onClose, onShare } = props;

  return (
    <aside className="flex-grow-0 flex-shrink-0 w-11 h-full bg-accent text-accent-foreground">
      <nav className="flex flex-col items-center gap-3 p-[10px]">
        <Button
          onClick={onClose}
          aria-label="Close post detail"
          variant="ghost-muted"
          size="icon"
          className="hover:bg-transparent"
        >
          <X aria-hidden="true" />
        </Button>
        <Button
          onClick={onShare}
          aria-label="Share post"
          variant="ghost-muted"
          size="icon"
          className="hover:bg-transparent"
        >
          <Share aria-hidden="true" />
        </Button>
      </nav>
    </aside>
  );
};

export default PostAside;
