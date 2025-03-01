import { Button } from "@/components/common/button";

const ProfileNavButtons: React.FC = () => (
  <div className="hidden md:flex items-center justify-between w-full mt-2">
    <div className="space-x-1">
      <Button variant="secondary" className="min-w-36">
        Timeline
      </Button>
      <Button variant="secondary" className="min-w-36">
        About
      </Button>
    </div>
    <div className="space-x-1">
      <Button variant="secondary" className="min-w-36">
        Follow
      </Button>
      <Button variant="secondary" className="min-w-36">
        Photos
      </Button>
    </div>
  </div>
);

export default ProfileNavButtons;
