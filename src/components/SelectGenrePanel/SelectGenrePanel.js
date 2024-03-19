import { apiSlice } from "../../api/apiSlice";
import { checkboxData } from "./checkboxData";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedGenre,
  selectFiltersButton,
  selectGenre,
  resetPage,
  toggleFiltersButton,
} from "../../slices/gamesSlice";

import sprite from "../../icons/sprite.svg";
import "./SelectGenrePanel.scss";

const SelectGenrePanel = () => {
  const dispatch = useDispatch();

  const selectedGenre = useSelector(selectSelectedGenre);
  const filtersButton = useSelector(selectFiltersButton);
  const handleRadio = (e) => {
    dispatch(apiSlice.util.invalidateTags(["FilteredGames"]));
    dispatch(selectGenre(e.target.value));
    dispatch(resetPage());
  };

  const buttonsElement = checkboxData.map((item) => {
    return (
      <li className="select-genre-panel__item" key={item.label} data-filters>
        <input
          id={item.label}
          value={item.parameter}
          name="select-genre-panel"
          type="radio"
          checked={item.parameter === selectedGenre}
          onChange={handleRadio}
        />
        <label htmlFor={item.label}>{item.label}</label>
      </li>
    );
  });
  const handleParentClick = (event) => {
    if (event.target.hasAttribute("data-filters")) {
      dispatch(toggleFiltersButton());
    }
  };

  if (filtersButton) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const toggleFiltersWindow = filtersButton
    ? "select-genre-panel select-genre-panel_positioned select-genre-panel_show"
    : "select-genre-panel select-genre-panel_positioned";

  return (
    <div
      data-filters
      className={toggleFiltersWindow}
      onClick={(e) => handleParentClick(e)}
    >
      <div className="select-genre-panel__container" data-filters>
        <svg data-filters className="select-genre-panel__button-close">
          <use data-filters href={`${sprite}#close-filters`}></use>
        </svg>
        <ul className="select-genre-panel__list">{buttonsElement}</ul>
      </div>
    </div>
  );
};

export default SelectGenrePanel;