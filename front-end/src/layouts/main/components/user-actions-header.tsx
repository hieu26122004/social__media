import InputHeader from "./input-header";
import AccountDropdown from "./account-dropdown/account-dropdown";
import useBreakpoint from "@/hooks/use-breakpoint";

const UserActionsHeader = () => {
  const { isLargeScreen } = useBreakpoint();
  return (
    <section aria-label="User actions" className="flex items-center gap-3">
      {isLargeScreen && <InputHeader className="w-80" />}
      <AccountDropdown />
    </section>
  );
};

export default UserActionsHeader;
