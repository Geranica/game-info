import { Link, useLocation } from "react-router-dom";
import "./HeaderNavigation.scss";

const navElementsData = [
  { label: "Main", path: "/" },
  { label: "Developers", path: "/developers" },
];

const HeaderNavigation = () => {
  const location = useLocation();
  const elements = navElementsData.map((item) => {
    const elementClassName =
      location.pathname === item.path
        ? "header-navigation__list-element header-navigation__list-element_active"
        : "header-navigation__list-element";
    return (
      <li key={item.label} className={elementClassName}>
        <Link to={item.path}>{item.label}</Link>
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
