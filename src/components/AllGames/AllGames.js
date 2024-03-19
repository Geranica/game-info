import { useDispatch, useSelector } from "react-redux";

import {
  selectPage,
  nextPage,
  selectSelectedGenre,
  selectSelectedGameTrendsFilter,
} from "../../slices/gamesSlice";
import { useGetGamesQuery } from "../../api/apiSlice";
import useInfiniteScroll from "../../hooks/infiniteScroll";
import { setContent } from "../../utils/setContent";

import GameCard from "../GameCard/GameCard";
import GameCardSkeletonArray from "../Skeletons/GameCardSkeleton/GameCardSkeletonArray";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./AllGames.scss";

const AllGames = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const genre = useSelector(selectSelectedGenre);
  const gameTrendsFilter = useSelector(selectSelectedGameTrendsFilter);
  const allGamesContent = useGetGamesQuery({ genre, page, gameTrendsFilter });
  console.log(allGamesContent);
  const increasePage = () => {
    dispatch(nextPage());
  };
  const { targetElement } = useInfiniteScroll(increasePage);
  const allGamesElements = (
    <ul className="games-list">
      {allGamesContent.data?.games.map((item, index) => {
        return (
          <GameCard
            ref={
              index === allGamesContent.data.games.length - 1
                ? targetElement
                : null
            }
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
    isLoading: allGamesContent.isLoading,
    isSuccess: allGamesContent.isSuccess,
    isFetching: allGamesContent.isFetching,
    isError: allGamesContent.isError,
    isFetchingContent: (
      <>
        {allGamesElements}
        <Spinner />
      </>
    ),
    isErrorContent: <ErrorMessage />,
    isLoadingContent: <GameCardSkeletonArray skeletonCounts={18} />,
    isSuccessContent: allGamesElements,
    page,
  };
  return setContent(content);
};

export default AllGames;
