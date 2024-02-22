import GameCard from "../GameCard/GameCard";

import "./GamesList.scss";

const GamesList = ({ games }) => {
  const elements = games.map((item) => {
    return (
      <GameCard key={item.id} name={item.gameName} image={item.background} />
    );
  });

  return <ul className="games-list">{elements}</ul>;
};

export default GamesList;
