import { NavLink } from "react-router-dom";
import "./HeaderNavigation.scss";

const navElementsData = [
  { label: "Home", path: "/" },
  { label: "Developers", path: "/developers" },
];

const HeaderNavigation = () => {
  const elements = navElementsData.map((item) => {
    const linkClassName = ({ isActive }: { isActive: boolean }) =>
      isActive
        ? "header-navigation__link header-navigation__link_active"
        : "header-navigation__link";

    return (
      <li key={item.label} className="header-navigation__element">
        <NavLink className={linkClassName} to={item.path}>
          {item.label}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="header-navigation">
      <div className="header-navigation__container">
        <ul className="header-navigation__list">{elements}</ul>
      </div>
    </nav>
  );
};
export default HeaderNavigation;
