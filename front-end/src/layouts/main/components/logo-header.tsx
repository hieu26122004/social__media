import LOGO from "@assets/logo.svg";
import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <div className="flex-shrink-0 mr-6">
      <h1 className="m-0">
        <Link to="/" aria-label="Home">
          <img src={LOGO} alt="Company Logo" className="size-[34px]" />
        </Link>
      </h1>
    </div>
  );
};

export default LogoHeader;
