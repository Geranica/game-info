import SelectGenrePanel from "../../SelectGenrePanel/SelectGenrePanel";
import SearchSection from "../../SearchSection/SearchSection";
import SearchPanel from "../../SearchPanel/SearchPanel";

import FiltersButton from "../../FiltersButton/FiltersButton";

import "./MainPage.scss";

const MainPage = () => {



  return (
    <section className="main-page">
      <div className="main-page__container container">
        <SelectGenrePanel />
        <div className="main-page__subfilters-and-search">
          <ul className="main-page__subfilters-list">
            <li className="main-page__subfilters-item">
              <button>Popular games</button>
            </li>
            <li className="main-page__subfilters-item">
              <button>New games</button>
            </li>
          </ul>
          <SearchPanel />
          <FiltersButton />
        </div>
        <SearchSection />
      </div>
    </section>
  );
};

export default MainPage;
