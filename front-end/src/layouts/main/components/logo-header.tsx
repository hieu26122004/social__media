import { useTheme } from "@/components/theme-provider";
import LOGO_DARK from "@assets/logo.svg";
import LOGO_LIGHT from "@assets/logo_light.svg";
import { Link } from "react-router-dom";

const LogoHeader = () => {
  const { theme } = useTheme();

  return (
    <div className="flex-shrink-0 mr-6">
      <h1 className="m-0">
        <Link to="/" aria-label="Home">
          {theme === "light" && (
            <img src={LOGO_DARK} alt="Company Logo" className="size-[34px]" />
          )}
          {theme === "dark" && (
            <img src={LOGO_LIGHT} alt="Company Logo" className="size-[34px]" />
          )}
        </Link>
      </h1>
    </div>
  );
};

export default LogoHeader;
