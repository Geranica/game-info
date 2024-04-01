import { useParams } from "react-router-dom";
import { useGetGameAdditionsQuery } from "../../api/apiSlice";
import { formatDateFromString } from "../../utils/formatDateFromString";
import { setContent } from "../../utils/setContent";

import sprite from "../../icons/sprite.svg";
import GameAdditionsSkeletonArray from "../Skeletons/GameAdditionsSkeleton/GameAdditionsSkeleton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import "./GameAdditions.scss";

const GameAdditions = () => {
  const { gameId } = useParams();
  const {
    isLoading,
    isSuccess,
    isError,
    data: additions = [],
  } = useGetGameAdditionsQuery(gameId);

  const items = additions.map((item) => {
    const image = item.background ? (
      <div className="game-additions__image">
        <img src={item.background} alt="game-additions-img" />
      </div>
    ) : (
      <svg className="game-additions__image">
        <use href={`${sprite}#no-image`}></use>
      </svg>
    );
    const date = formatDateFromString(item.released);
    return (
      <div key={item.id} className="game-additions__item">
        <div className="game-additions__item-content">
          <div className="game-additions__name">{item.gameName}</div>
          {image}
          <div className="game-additions__release-date">{date}</div>
        </div>
      </div>
    );
  });
  const content =
    additions.length > 0 ? (
      items
    ) : (
      <div className="game-additions__no-info">No information</div>
    );
  const contentData = {
    isLoading,
    isSuccess,
    isError,
    isSuccessContent: content,
    isLoadingContent: <GameAdditionsSkeletonArray skeletonCounts={3} />,
    isErrorContent: <ErrorMessage />,
  };

  return (
    <section className="game-additions">
      <div className="game-additions__container">
        <h2 className="game-additions__titel">Additions:</h2>
        <div className="game-additions__block">{setContent(contentData)}</div>
      </div>
    </section>
  );
};

export default GameAdditions;
