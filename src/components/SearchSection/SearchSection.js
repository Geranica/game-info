import GameCardSkeletonArray from "../Skeletons/GameCardSkeleton/GameCardSkeletonArray";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useInfiniteScroll from "../../hooks/infiniteScroll";

import { useRef } from "react";
import { useGetGamesQuery, useGetGamesBySearchQuery } from "../../api/apiSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectPage, nextPage, selectDesiredGame } from "./gamesSlice";

import GameCard from "../GameCard/GameCard";

import "./SearchSection.scss";

const setContent = ({ isLoading, isSuccess, content, isFetching, isError }) => {
  if (isLoading) {
    return <GameCardSkeletonArray skeletonCounts={12} />;
  } else if (isFetching) {
    return (
      <>
        <ul className="games-list">{content}</ul>
        <Spinner />
      </>
    );
  } else if (isSuccess) {
    return <ul className="games-list">{content}</ul>;
  } else if (isError) {
    return <ErrorMessage />;
  }
};

const SearchSection = () => {
  const searchTerm = useSelector(selectDesiredGame);
  const currentPage = useSelector(selectPage);
  const searchedGamesContent = useGetGamesBySearchQuery(searchTerm, {
    skip: !searchTerm,
  });
  const allGamesContent = useGetGamesQuery(currentPage);
  const dispatch = useDispatch();

  const increasePage = () => {
    dispatch(nextPage());
  };
  const { targetElement } = useInfiniteScroll(increasePage);

  const searchedGamesElements = searchedGamesContent?.data?.map((item) => {
    return (
      <GameCard
        key={item.id}
        name={item.gameName}
        image={item.background}
        id={item.id}
      />
    );
  });

  const allGamesElements = allGamesContent?.data?.games.map((item, index) => {
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

  const content = searchTerm
    ? {
        content: searchedGamesElements,
        isLoading: searchedGamesContent.isLoading,
        isSuccess: searchedGamesContent.isSuccess,
        isFetching: searchedGamesContent.isFetching,
        isError: searchedGamesContent.isError,
      }
    : {
        content: allGamesElements,
        isLoading: allGamesContent.isLoading,
        isSuccess: allGamesContent.isSuccess,
        isFetching: allGamesContent.isFetching,
        isError: allGamesContent.isError,
      };
  return (
    <section className="search-section">
      <div className="search-section__container container">
        {setContent(content)}
      </div>
    </section>
  );
};

export default SearchSection;
