import { forwardRef } from "react";
import { Link } from "react-router-dom";

import "./GameCard.scss";

const GameCard = forwardRef(({ name, image, id }, ref) => {
  return (
    <li ref={ref} className="game-card">
      <Link className="game-card__link" to={`/game/${id}/about-game`}>
        <div className="game-card__container">
          <div className="game-card__img">
            <img src={image} alt="" />
          </div>
          <div className="game-card__name">{name}</div>
        </div>
      </Link>
    </li>
  );
});

export default GameCard;
