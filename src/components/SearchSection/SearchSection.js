import AllGames from "../AllGames/AllGames";
import SearchGames from "../SearchGames/SearchGames";

import { useSelector } from "react-redux";
import { selectDesiredGame } from "../../Slices/gamesSlice";

import "./SearchSection.scss";

const SearchSection = () => {
  const searchTerm = useSelector(selectDesiredGame);
  const content = searchTerm ? <SearchGames /> : <AllGames />;

  return (
    <section className="search-section">
      <div className="search-section__container">{content}</div>
    </section>
  );
};

export default SearchSection;
