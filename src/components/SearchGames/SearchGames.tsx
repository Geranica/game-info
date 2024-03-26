import { useSelector } from "react-redux";

import { useGetGamesBySearchQuery } from "../../api/apiSlice";
import { selectDesiredGame } from "../../slices/gamesSlice";
import { setContent } from "../../utils/setContent";

import GameCardSkeletonArray from "../Skeletons/GameCardSkeleton/GameCardSkeletonArray";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import GameCard from "../GameCard/GameCard";

import "./SearchGames.scss";

const SearchGames = () => {
  const searchTerm = useSelector(selectDesiredGame);
  const searchedGamesContent = useGetGamesBySearchQuery(searchTerm, {
    skip: !searchTerm,
  });

  const searchedGamesElements = (
    <ul className="games-list">
      {searchedGamesContent.data?.map((item) => {
        return (
          <GameCard
            key={item.id}
            name={item.gameName}
            image={item.background}
            id={item.id}
          />
        );
      })}
    </ul>
  );
  const content = {
    isLoading: searchedGamesContent.isLoading,
    isSuccess: searchedGamesContent.isSuccess,
    isFetching: searchedGamesContent.isFetching,
    isError: searchedGamesContent.isError,
    isSuccessContent: searchedGamesElements,
    isLoadingContent: <GameCardSkeletonArray skeletonCounts={20} />,
    isFetchingContent: <GameCardSkeletonArray skeletonCounts={20} />,
    isErrorContent: <ErrorMessage />,
  };
  return setContent(content);
};

export default SearchGames;
