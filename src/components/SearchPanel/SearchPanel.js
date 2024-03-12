import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { searchGame } from "../../Slices/gamesSlice";
import { useDispatch } from "react-redux";

import "./SearchPanel.scss";
import sprite from "../../icons/sprite.svg";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [debounceValue] = useDebounce(inputValue, 800);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    dispatch(searchGame(debounceValue));
  }, [debounceValue]);
  
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
