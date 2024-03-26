import SelectGenrePanel from "../../SelectGenrePanel/SelectGenrePanel";
import SearchSection from "../../SearchSection/SearchSection";
import SearchPanel from "../../SearchPanel/SearchPanel";

import FiltersButton from "../../FiltersButton/FiltersButton";
import GameTrendsFilter from "../../GameTrendsFilter/GameTrendsFilter";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="main-page">
      <div className="main-page__container container">
        <SelectGenrePanel />
        <div className="main-page__subfilters-and-search">
          <GameTrendsFilter />
          <SearchPanel />
          <FiltersButton />
        </div>
        <SearchSection />
      </div>
    </section>
  );
};

export default MainPage;
