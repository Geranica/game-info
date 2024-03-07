import { Link, useParams } from "react-router-dom";
import "./SingleGameNavigation.scss";

const SingleGameNavigation = ({ gameId }) => {
  const { "*": activeLink } = useParams();
  const linksContent = [
    { label: "About game", path: "about-game" },
    { label: "Requirements", path: "requirements" },
    { label: "Screenshots", path: "screenshots" },
  ];

  const elements = linksContent.map((item) => {
    const className =
      item.path === activeLink
        ? "single-game-navigation__item single-game-navigation__item_active"
        : "single-game-navigation__item";
    return (
      <li key={item.path} className={className}>
        <Link
          to={`/game/${gameId}/${item.path}`}
          className="single-game-navigation__item-link"
        >
          {item.label}
        </Link>
      </li>
    );
  });

  return (
    <nav className="single-game-navigation">
      <div className="single-game-navigation__container container">
        <ul className="single-game-navigation__list">{elements}</ul>
      </div>
    </nav>
  );
};

export default SingleGameNavigation;
