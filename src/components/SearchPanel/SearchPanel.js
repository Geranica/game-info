import { useState } from "react";
import "./SearchPanel.scss";
import sprite from "../../icons/sprite.svg";

const SearchPanel = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
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
