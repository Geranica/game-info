import { useState, useEffect } from "react";
import useGameInfoServise from "../../services/MarvelService";

import SearchPanel from "../SearchPanel/SearchPanel";
import GamesList from "../GamesList/GamesList";

import "./SearchSection.scss";

const SearchSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [games, setGames] = useState([]);

  const { getAllGames } = useGameInfoServise();
  useEffect(() => {
    getAllGames(currentPage).then((result) => setGames(result));
  }, []);

  return (
    <section className="search-section">
      <div className="search-section__container container">
        {/* <SearchPanel /> */}
        <GamesList games={games} />
      </div>
    </section>
  );
};

export default SearchSection;
