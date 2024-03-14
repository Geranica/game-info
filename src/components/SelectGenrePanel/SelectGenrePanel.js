import { apiSlice } from "../../api/apiSlice";
import { checkboxData } from "./checkboxData";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedGenre,
  selectGenre,
  resetPage,
} from "../../slices/gamesSlice";
import "./SelectGenrePanel.scss";

const SelectGenrePanel = () => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector(selectSelectedGenre);
  const handleRadio = (e) => {
    dispatch(apiSlice.util.invalidateTags(["FilteredGames"]));
    dispatch(selectGenre(e.target.value));
    dispatch(resetPage());
  };
  const buttonsElement = checkboxData.map((item) => {
    return (
      <li className="select-genre-panel__item" key={item.label}>
        <input
          id={item.parameter}
          value={item.parameter}
          name="select-genre-panel"
          type="radio"
          checked={item.parameter === selectedGenre}
          onChange={handleRadio}
        />
        <label htmlFor="">{item.label}</label>
      </li>
    );
  });

  return (
    <div className="select-genre-panel">
      <div className="select-genre-panel__container">
        <ul className="select-genre-panel__list">{buttonsElement}</ul>
      </div>
    </div>
  );
};

export default SelectGenrePanel;
