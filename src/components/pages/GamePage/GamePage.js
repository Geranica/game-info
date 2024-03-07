import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { Route, Routes } from "react-router-dom";
import GameScreenshots from "../../GameScreenshots/GameScreenshots";
import AboutGame from "../../AboutGame/AboutGame";

import SingleGameNavigation from "../../SingleGameNavigation/SingleGameNavigation";
import {
  useGetGameQuery,
  useGetGameScreenshotsQuery,
} from "../../../api/apiSlice";

import "./GamePage.scss";

const GamePage = () => {
  const { gameId } = useParams();
  const { data: game = {} } = useGetGameQuery(gameId);
  const { data: screenshots = [] } = useGetGameScreenshotsQuery(gameId);

  const { gameName, background, description } = game;

  console.log('ren')
 

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), #151515), url(${background})`,
  };

  return (
    <section className="game-page" style={backgroundImageStyle}>
      <div className="game-page__container container">
        <h2 className="game-page__name">{gameName}</h2>
        <SingleGameNavigation gameId={gameId} />
  

        <Routes>
          <Route
            path="about-game"
            element={<AboutGame description={description} />}
          />
          <Route
            path="screenshots"
            element={<GameScreenshots screenshots={screenshots} />}
          />
        </Routes>
      </div>
    </section>
  );
};

export default GamePage;
