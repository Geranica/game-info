import { Link } from "react-router-dom";

import "./DeveloperCard.scss";

interface DeveloperCardInterface {
  name: string;
  background: string;
  gamesCount: number;
  id: number;
}

const DeveloperCard = ({
  name,
  background,
  gamesCount,
  id,
}: DeveloperCardInterface) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #46468d), url(${background})`,
  };
  return (
    <div className="developer-card" style={backgroundStyle}>
      <div className="developer-card__container">
        <Link className="developer-card__link" to={`/developers/${id}`}>
          <h3 className="developer-card__name">{name}</h3>
        </Link>
        <div className="developer-card__games-count">{`Games: ${gamesCount}`}</div>
      </div>
    </div>
  );
};

export default DeveloperCard;
