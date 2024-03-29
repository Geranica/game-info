import { Link, useParams } from "react-router-dom";
import { useRef } from "react";

import { useLazyGetGameAchievementsQuery } from "../../api/apiSlice";

import "./SingleGameNavigation.scss";

const SingleGameNavigation = ({ gameId }: { gameId: number }) => {
  const [fetchAchievementsData] = useLazyGetGameAchievementsQuery();

  const isFetchCompletedRef = useRef(false);

  const handleMouseEnter = () => {
    if (!isFetchCompletedRef.current) {
      fetchAchievementsData(gameId);
      isFetchCompletedRef.current = true;
    }
  };

  const { "*": activeLink } = useParams();
  
  const linksContent = [
    { label: "About game", path: "about-game" },
    { label: "Requirements", path: "requirements" },
    { label: "Screenshots", path: "screenshots" },
    { label: "Achievements", path: "achievements" },
  ];
  const elements = linksContent.map((item) => {
    const classNameLi =
      item.path === activeLink
        ? "single-game-navigation__item single-game-navigation__item_active"
        : "single-game-navigation__item";
    const classNameLink =
      item.path === activeLink
        ? "single-game-navigation__item-link single-game-navigation__item-link_active"
        : "single-game-navigation__item-link";
    return (
      <li
        onMouseEnter={
          item.label === "Achievements" ? handleMouseEnter : undefined
        }
        key={item.path}
        className={classNameLi}
      >
        <Link to={`/game/${gameId}/${item.path}`} className={classNameLink}>
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
