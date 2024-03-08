import "./AboutGame.scss";
import DOMPurify from "dompurify";

const AboutGame = ({ description, metacritic }) => {
  let scoreColor = "about-game__metacritic-score";
  if (metacritic >= 80) {
    scoreColor += " about-game__metacritic-score_high";
  } else if (metacritic >= 60 && metacritic < 80) {
    scoreColor += " about-game__metacritic-score_middle";
  } else if (metacritic <= 59) {
    scoreColor += " about-game__metacritic-score_low";
  }

  const cleanDescription = DOMPurify.sanitize(description);
  return (
    <div className="about-game">
      <div className="about-game__container">
        <div className="about-game__metacritic">
          <div className={scoreColor}>{metacritic}</div>
          <div className="about-game__metacritic-label">Metacritic score</div>
        </div>
        <div
          className="about-game__description"
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        ></div>
      </div>
    </div>
  );
};

export default AboutGame;
