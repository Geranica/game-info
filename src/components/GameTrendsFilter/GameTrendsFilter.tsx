import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGameTrendsFilter,
  selectSelectedGameTrendsFilter,
  resetPage,
} from "../../slices/gamesSlice";

import "./GameTrendsFilter.scss";

const GameTrendsFilter = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectSelectedGameTrendsFilter);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const targetValue = e.currentTarget.dataset.gameTrendsFilter;
    dispatch(resetPage());
    dispatch(selectGameTrendsFilter(targetValue));
  };

  const filtersData = [
    { label: "Popularity", value: "-rating" },
    { label: "Release date", value: "-released" },
  ];

  const filtersElements = filtersData.map((item) => {
    const className =
      item.value === activeFilter
        ? "game-trends-filter__item game-trends-filter__item_active"
        : "game-trends-filter__item";
    return (
      <li
        onClick={(e) => handleClick(e)}
        data-game-trends-filter={item.value}
        className={className}
        key={item.label}
      >
        {item.label}
      </li>
    );
  });

  return (
    <div className="game-trends-filter">
      <ul className="game-trends-filter__list">{filtersElements}</ul>
    </div>
  );
};

export default GameTrendsFilter;
