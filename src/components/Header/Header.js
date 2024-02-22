import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo">
          <a href="#" className="header__logo-link">
            GameInfo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
