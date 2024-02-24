import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import useGameInfoServise from "../../services/useGameInfoServise";

import SearchPanel from "../SearchPanel/SearchPanel";
import GameCard from "../GameCard/GameCard";

import "./SearchSection.scss";

const SearchSection = () => {
  

  const [targetElement, targetElementIsVisible] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [games, setGames] = useState([]);
  const [countOfGames, setCountOfGames] = useState(null);

  const { getAllGames } = useGameInfoServise();

  const loadMoreGames = (currentPage) => {
    getAllGames(currentPage).then((result) => {
      onGamesLoaded(result.games);
      setCountOfGames (result.count);
    });
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onGamesLoaded = (loadedGames) => {
    setGames((prevGames) => [...prevGames, ...loadedGames]);
  };

  useEffect(() => {
    loadMoreGames(currentPage);
  }, []);

  useEffect(() => {
    if (targetElementIsVisible && games.length < countOfGames) {
      loadMoreGames(currentPage);
    }
  }, [targetElementIsVisible]);

  const elements = games.map((item, index) => {
    return (
      <GameCard
        ref={index === games.length - 1 ? targetElement : null}
        key={item.id}
        name={item.gameName}
        image={item.background}
        id={item.id}
      />
    );
  });

  return (
    <section className="search-section">
      <div className="search-section__container container">
        {/* <SearchPanel /> */}
        <ul className="games-list">{elements}</ul>
      </div>
    </section>
  );
};

export default SearchSection;
