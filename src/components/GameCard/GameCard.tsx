import { forwardRef, Ref } from "react";
import { Link } from "react-router-dom";

import sprite from "../../icons/sprite.svg";
import "./GameCard.scss";

interface GameCardProps {
  name: string;
  image: string;
  id: number;
}

const GameCard = forwardRef<HTMLLIElement, GameCardProps>(
  ({ name, image, id }, ref: Ref<HTMLLIElement>) => {
    const imgElement = image ? (
      <div className="game-card__img">
        <img src={image} alt="" />
      </div>
    ) : (
      <svg className="game-card__img">
        <use href={`${sprite}#no-image`}></use>
      </svg>
    );
    return (
      <li ref={ref} className="game-card">
        <Link className="game-card__link" to={`/game/${id}/about-game`}>
          <div className="game-card__container">
            {imgElement}
            <div className="game-card__name">{name}</div>
          </div>
        </Link>
      </li>
    );
  }
);

export default GameCard;
