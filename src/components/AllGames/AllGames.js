import { useDispatch, useSelector } from "react-redux";

import { selectPage, nextPage } from "../../Slices/gamesSlice";
import { useGetGamesQuery } from "../../api/apiSlice";
import useInfiniteScroll from "../../hooks/infiniteScroll";

import GameCard from "../GameCard/GameCard";
import GameCardSkeletonArray from "../Skeletons/GameCardSkeleton/GameCardSkeletonArray";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import './AllGames.scss';

const setContent = ({ isLoading, isSuccess, elements, isFetching, isError }) => {
  if (isLoading) {
    return <GameCardSkeletonArray skeletonCounts={12} />;
  } else if (isFetching) {
    return (
      <>
        <ul className="games-list">{elements}</ul>
        <Spinner />
      </>
    );
  } else if (isSuccess) {
    return <ul className="games-list">{elements}</ul>;
  } else if (isError) {
    return <ErrorMessage />;
  }
};

const AllGames = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  const allGamesContent = useGetGamesQuery(currentPage);
  const increasePage = () => {
    dispatch(nextPage());
  };
  console.log(allGamesContent)
  const { targetElement } = useInfiniteScroll(increasePage);
  const allGamesElements = allGamesContent.data?.games.map((item, index) => {
    return (
      <GameCard
        ref={
          index === allGamesContent.data.games.length - 1 ? targetElement : null
        }
        key={item.id}
        name={item.gameName}
        image={item.background}
        id={item.id}
      />
    );
  });
  const content = {
    elements: allGamesElements,
    isLoading: allGamesContent.isLoading,
    isSuccess: allGamesContent.isSuccess,
    isFetching: allGamesContent.isFetching,
    isError: allGamesContent.isError,
  };

  return setContent(content);
};


export default AllGames;