import { useState, useCallback, useMemo } from "react";
import { searchGame } from "../../slices/gamesSlice";
import { useDispatch } from "react-redux";

import debounce from "debounce";

import "./SearchPanel.scss";
import sprite from "../../icons/sprite.svg";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        dispatch(searchGame(value));
      }, 850),
    [dispatch]
  );

  const handleOnChange = useCallback(
    (e) => {
      setInputValue(e.target.value);
      debouncedSearch(e.target.value);
    },
    [debouncedSearch]
  );

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
