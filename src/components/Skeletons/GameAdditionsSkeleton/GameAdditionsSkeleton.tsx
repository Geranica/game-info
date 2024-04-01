import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./GameAdditionsSkeleton.scss";

const GameAdditionsSkeleton = () => {
  return (
    <div className="game-additions-skeleton">
      <div className="game-additions-skeleton__item-content">
        <div className="game-additions-skeleton__name">
          <Skeleton />
        </div>
        <div className="game-additions-skeleton__image">
          <Skeleton />
        </div>
        <div className="game-additions-skeleton__release-date">
          <Skeleton width={"75%"} />
        </div>
      </div>
    </div>
  );
};


const GameAdditionsSkeletonArray = ({
  skeletonCounts,
}: {
  skeletonCounts: number;
}) => {
  const skeletons = Array.from({ length: skeletonCounts }, (_, index) => (
    <GameAdditionsSkeleton key={index} />
  ));

  return (
    <SkeletonTheme baseColor="rgb(126, 133, 214)" highlightColor="#444">
      {skeletons}
    </SkeletonTheme>
  );
};


export default GameAdditionsSkeletonArray;
