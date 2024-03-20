import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./GameCardSkeletonArray.scss";

const GameCardSkeleton = () => {
  return (
    <div className="game-card-skeleton">
      <div className="game-card-skeleton__container">
        <div className="game-card-skeleton__img">
          <Skeleton />
        </div>
        <div className="game-card-skeleton__name">
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

const GameCardSkeletonArray = ({ skeletonCounts }) => {
  const skeletons = Array.from({ length: skeletonCounts }, (_, index) => (
    <GameCardSkeleton key={index} />
  ));

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <ul className="game-card-skeleton__list">{skeletons}</ul>
    </SkeletonTheme>
  );
};

export default GameCardSkeletonArray;
