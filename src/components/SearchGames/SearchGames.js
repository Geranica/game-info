import { useSelector } from "react-redux";

import { useGetGamesBySearchQuery } from "../../api/apiSlice";
import { selectDesiredGame } from "../SearchSection/gamesSlice";

import GameCardSkeletonArray from "../Skeletons/GameCardSkeleton/GameCardSkeletonArray";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import GameCard from "../GameCard/GameCard";

import "./SearchGames.scss";

const setContent = ({
  isLoading,
  isSuccess,
  elements,
  isFetching,
  isError,
}) => {
  if (isLoading) {
    return <GameCardSkeletonArray skeletonCounts={20} />;
  } else if (isFetching) {
    return <GameCardSkeletonArray skeletonCounts={20} />;
  } else if (isSuccess) {
    return <ul className="games-list">{elements}</ul>;
  } else if (isError) {
    return <ErrorMessage />;
  }
};

const SearchGames = () => {
  const searchTerm = useSelector(selectDesiredGame);
  const searchedGamesContent = useGetGamesBySearchQuery(searchTerm, {
    skip: !searchTerm,
  });

  const searchedGamesElements = searchedGamesContent.data?.map((item) => {
    return (
      <GameCard
        key={item.id}
        name={item.gameName}
        image={item.background}
        id={item.id}
      />
    );
  });
  const content = {
    elements: searchedGamesElements,
    isLoading: searchedGamesContent.isLoading,
    isSuccess: searchedGamesContent.isSuccess,
    isFetching: searchedGamesContent.isFetching,
    isError: searchedGamesContent.isError,
  };

  return setContent(content);
};

export default SearchGames;
