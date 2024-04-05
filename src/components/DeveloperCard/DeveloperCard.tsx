import "./DeveloperCard.scss";

const DeveloperCard = ({ name, background, gamesCount }) => {
  return (
    <div className="developer-card">
      <div className="developer-card__container">
         <h2 className="developer-card__name">{name}</h2>
      </div>
    </div>
  );
};

export default DeveloperCard;
