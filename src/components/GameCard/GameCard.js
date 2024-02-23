import { forwardRef } from "react";
import './GameCard.scss';

const GameCard = forwardRef(({name, image}, ref) => {
  return (
    <li ref={ref} className="game-card">
      <div className="game-card__container">
        <div className="game-card__img">
          <img src={image} alt="" />
        </div>
        <div className="game-card__name">{name}</div>
      </div>
    </li>
  );
});

export default GameCard;
