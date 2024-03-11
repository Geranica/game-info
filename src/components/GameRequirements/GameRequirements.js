import "./GameRequirements.scss";
const GameRequirements = ({ requirements }) => {
  const requirementsElement = requirements.find(
    (item) => item.platform.name === "PC"
  );
  const minimumRequirementsElements = requirementsElement?.requirements?.minimum
    ?.split("\n")
    .map((item) => item.trim())
    .filter((item, index) => index > 0)
    .map((item, index) => {
      return (
        <div key={index} className="game-requirements__item">
          {item}
        </div>
      );
    });
  const recommendedRequirementsElements =
    requirementsElement?.requirements?.recommended
      ?.split("\n")
      .map((item) => item.trim())
      .filter((item, index) => index > 0)
      .map((item, index) => {
        return (
          <div key={index} className="game-requirements__item">
            {item}
          </div>
        );
      });

  return (
    <div className="game-requirements">
      <div className="game-requirements__container">
        <div className="game-requirements__grid-element">
          <h2 className="game-requirements__label">Minimum Requirements:</h2>
          {(minimumRequirementsElements ?? []).length > 0 ? (
            minimumRequirementsElements
          ) : (
            <div className="game-requirements__item">TBA</div>
          )}
        </div>
        <div className="game-requirements__grid-element">
          <h2 className="game-requirements__label">
            Recommended Requirements:
          </h2>
          {(recommendedRequirementsElements ?? []).length > 0 ? (
            recommendedRequirementsElements
          ) : (
            <div className="game-requirements__item">TBA</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameRequirements;
