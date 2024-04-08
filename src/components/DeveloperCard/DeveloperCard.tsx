import "./DeveloperCard.scss";

const DeveloperCard = ({ name, background, gamesCount }) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #46468d), url(${background})`,
  };
  return (
    <div className="developer-card" style={backgroundStyle}>
      <div className="developer-card__container">
        <h3 className="developer-card__name">{name}</h3>
        <div className="developer-card__games-count">{`Games: ${gamesCount}`}</div>
      </div>
    </div>
  );
};

export default DeveloperCard;
