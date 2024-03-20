import "./GameScreenshots.scss";

const GameScreenshots = ({ screenshots }) => {
  const screenshotElements = screenshots.map((item, index) => {
    return (
      <div className="game-screenshots__screenshot" key={index}>
        <img src={item} alt={`screenshot-${index}`} />
      </div>
    );
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
