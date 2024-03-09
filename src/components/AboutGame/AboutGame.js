import "./AboutGame.scss";
import DOMPurify from "dompurify";
import { formatDateFromString } from "../../utils/formatDateFromString";

const AboutGame = ({ description, metacritic, released, developers }) => {
  const date = formatDateFromString(released);
  const developersElements = developers.map((item, index) => {
    return <div key={index}>{item.name}</div>;
  });

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

        <div className="about-game__main-information">
          <div
            className="about-game__description"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          ></div>
          <div className="about-game__summary">
            <div className="about-game__date-block">
              <div className="about-game__date-label">Released:</div>
              <div className="about-game__date-value">{date}</div>
            </div>
            <div className="about-game__developers-block">
              <div className="about-game__date-label">Developers:</div>
              <div className="about-game__date-value">{developersElements}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
