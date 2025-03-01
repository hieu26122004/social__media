import InputHeader from "./input-header";
import useBreakpoint from "@/hooks/use-breakpoint";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/common/button";
import { Power } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/constants/path";

const UserActionsHeader = () => {
  const navigate = useNavigate();
  const { isLargeScreen } = useBreakpoint();
  return (
    <section aria-label="User actions" className="flex items-center">
      {isLargeScreen && <InputHeader className="w-80" />}
      <ModeToggle />
      <Button
        variant="ghost-muted"
        aria-label="Logout"
        className="ml-6"
        onClick={() => navigate(PATHS.LOGIN)}
      >
        <Power aria-hidden="true" />
      </Button>
    </section>
  );
};

export default UserActionsHeader;
