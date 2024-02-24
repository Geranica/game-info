import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import useGameInfoServise from "../../../services/useGameInfoServise";

import "./GamePage.scss";

const GamePage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [screenshots, setScreenshots] = useState([]);

  const { getGame, getGameScreenshots } = useGameInfoServise();

  useEffect(() => {
    getGame(gameId).then((result) => setGame(result));
    getGameScreenshots(gameId).then((result) => setScreenshots(result));
  }, [gameId]);

  const { gameName, background, description } = game;
  const cleanDescription = DOMPurify.sanitize(description);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), #151515), url(${background})`,
  };

  const screenshotElements = screenshots.map((item, index) => {
    return (
      <div className="game-page__screenshot" key={index}>
        <img src={item} alt={`screenshot-${index}`} />
      </div>
    );
  });

  return (
    <section className="game-page" style={backgroundImageStyle}>
      <div className="game-page__container container">
        <div className="game-page__content-block">
          <div className="game-page__about-game">
            <h2 className="game-page__name">{gameName}</h2>
            <div
              className="game-page__description"
              dangerouslySetInnerHTML={{ __html: cleanDescription }}
            />
          </div>
          <div className="game-page__screenshots">{screenshotElements}</div>
        </div>
      </div>
    </section>
  );
};

export default GamePage;
