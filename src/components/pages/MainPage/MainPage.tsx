import SelectGenrePanel from "../../SelectGenrePanel/SelectGenrePanel";
import SearchSection from "../../SearchSection/SearchSection";
import SearchPanel from "../../SearchPanel/SearchPanel";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

import FiltersButton from "../../FiltersButton/FiltersButton";
import GameTrendsFilter from "../../GameTrendsFilter/GameTrendsFilter";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <section className="main-page">
      <div className="main-page__container container">
        <ErrorBoundary>
          <SelectGenrePanel />
        </ErrorBoundary>
        <div className="main-page__subfilters-and-search">
          <ErrorBoundary>
            <GameTrendsFilter />
          </ErrorBoundary>
          <ErrorBoundary>
            <SearchPanel />
          </ErrorBoundary>
          <ErrorBoundary>
            <FiltersButton />
          </ErrorBoundary>
        </div>
        <ErrorBoundary>
          <SearchSection />
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default MainPage;
