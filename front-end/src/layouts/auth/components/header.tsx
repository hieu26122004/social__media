import LOGO from "@assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-primary-600">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img src={LOGO} alt="logo" className="size-14" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
