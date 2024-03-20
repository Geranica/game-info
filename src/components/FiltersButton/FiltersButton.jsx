import { toggleFiltersButton } from "../../slices/gamesSlice";
import { useDispatch } from "react-redux";

import "./FiltersButton.scss";
import sprite from "../../icons/sprite.svg";

const FiltersButton = () => {
  const dispatch = useDispatch();
  return (
    <svg
      onClick={() => dispatch(toggleFiltersButton())}
      className="filters-button"
    >
      <use href={`${sprite}#filters`}></use>
    </svg>
  );
};

export default FiltersButton;
