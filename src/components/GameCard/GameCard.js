import './GameCard.scss';

const GameCard = ({name, image}) => {
  return (
    <li className="game-card">
      <div className="game-card__container">
        <div className="game-card__img">
          <img src={image} alt="" />
        </div>
        <div className="game-card__name">{name}</div>
      </div>
    </li>
  );
};

export default GameCard;
