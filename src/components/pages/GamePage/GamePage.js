import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import GameScreenshots from "../../GameScreenshots/GameScreenshots";
import AboutGame from "../../AboutGame/AboutGame";
import GameRequirements from "../../GameRequirements/GameRequirements";
import SingleGameNavigation from "../../SingleGameNavigation/SingleGameNavigation";
import {
  useGetGameQuery,
  useGetGameScreenshotsQuery,
} from "../../../api/apiSlice";

import "./GamePage.scss";

const GamePage = () => {
  const { gameId } = useParams();
  const { data: game = [], isSuccess, isLoading } = useGetGameQuery(gameId);
  const { data: screenshots = [] } = useGetGameScreenshotsQuery(gameId);

  const {
    gameName,
    background,
    description,
    metacritic,
    platforms = [],
    released,
    developers = [],
    publishers = [],
    genres = [],
  } = game;

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
            element={
              <AboutGame
                developers={developers}
                released={released}
                metacritic={metacritic}
                description={description}
                publishers={publishers}
                genres={genres}
                platforms={platforms}
                isLoading={isLoading}
                isSuccess={isSuccess}
              />
            }
          />

          <Route
            path="requirements"
            element={<GameRequirements requirements={platforms} />}
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
