import { useState, useEffect } from "react";
import { searchGame, resetDesiredGame } from "../../slices/gamesSlice";
import { useDispatch } from "react-redux";
import debounce from "debounce";

import "./SearchPanel.scss";
import sprite from "../../icons/sprite.svg";

const debouncedSearch = debounce(
  (dispatch, value) => dispatch(searchGame(value)),
  1000
);

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    return () => {
      debouncedSearch.clear();
      dispatch(resetDesiredGame());
    };
  }, []);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    debouncedSearch(dispatch, e.target.value);
  };

  const iconClassName = !isFocused
    ? "search-panel__icon"
    : "search-panel__icon search-panel__icon_active";

  return (
    <div className="search-panel">
      <svg className={iconClassName}>
        <use href={`${sprite}#search-logo`}></use>
      </svg>
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={inputValue}
        onChange={(e) => handleOnChange(e)}
        className="search-panel__input"
        type="text"
      />
    </div>
  );
};

export default SearchPanel;
