import GameScreenshot from "../GameScreenshot/GameScreenshot";

import "./GameScreenshots.scss";

const GameScreenshots = ({ screenshots }: { screenshots: string[] }) => {
  const screenshotElements = screenshots.map((item, index) => {
    return <GameScreenshot key={index} screenshot={item} />;
  });
  return (
    <div className="game-screenshots">
      <div className="game-screenshots__container">
        <div className="game-screenshots__block">{screenshotElements}</div>
      </div>
    </div>
  );
};

export default GameScreenshots;
