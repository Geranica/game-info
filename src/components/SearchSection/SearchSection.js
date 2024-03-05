import GameCardSkeletonArray from "../Skeletons/GameCardSkeleton/GameCardSkeletonArray";
import Spinner from "../Spinner/Spinner";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useGetGamesQuery } from "../../api/apiSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectPage, nextPage } from "./gamesSlice";

import SearchPanel from "../SearchPanel/SearchPanel";
import GameCard from "../GameCard/GameCard";

import "./SearchSection.scss";

const setContent = (isLoading, isSuccess, elements, isFetching) => {
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
  }
};

const SearchSection = () => {
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  const {
    data = {},
    isFetching,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGamesQuery(currentPage);

  console.log("render");
  const [targetElement, targetElementIsVisible] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  const myRef = useRef();
  myRef.current = data?.count;

  const increasePage = () => {
    dispatch(nextPage());
    myRef.current = data?.count;
  };

  useEffect(() => {
    if (targetElementIsVisible && data.games?.length < myRef.current) {
      increasePage();
    }
  }, [targetElementIsVisible]);

  const elements = data.games?.map((item, index) => {
    return (
      <GameCard
        ref={index === data.games?.length - 1 ? targetElement : null}
        key={item.id}
        name={item.gameName}
        image={item.background}
        id={item.id}
      />
    );
  });

  return (
    <section className="search-section">
      <div className="search-section__container container">
        {setContent(isLoading, isSuccess, elements, isFetching)}
      </div>
    </section>
  );
};

export default SearchSection;
