import { Link } from "react-router-dom";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            GameInfo
          </Link>
        </div>
        <HeaderNavigation/>
      </div>
    </header>
  );
};

export default Header;
