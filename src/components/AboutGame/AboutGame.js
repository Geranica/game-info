import "./AboutGame.scss";
import DOMPurify from "dompurify";

const AboutGame = ({ description }) => {
  const cleanDescription = DOMPurify.sanitize(description);
  return (
    <div className="about-game">
      <div className="about-game__container">
        <div
          className="about-game__description"
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        ></div>
      </div>
    </div>
  );
};

export default AboutGame;
