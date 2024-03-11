import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./AboutGameSkeleton.scss";

const AboutGameSkeleton = () => {
  return (
    <SkeletonTheme baseColor="rgb(126, 133, 214)" highlightColor="#444">
      <div className="about-game-skeleton">
        <div className="about-game-skeleton__container">
          <div className="about-game-skeleton__main-information">
            <div className="about-game-skeleton__description">
              <Skeleton height={"15px"} width={"80%"} />
              <Skeleton height={"15px"} width={"75%"} />
              <Skeleton height={"15px"} width={"96%"} />
              <Skeleton height={"15px"} width={"60%"} />
              <Skeleton height={"15px"} width={"95%"}  />
              <Skeleton height={"15px"} width={"95%"}  />
              <Skeleton height={"15px"} width={"95%"}  />
            </div>
            <div className="about-game-skeleton__summary">
              <div className="parent">
                <div className="parent__child-1">
                  <Skeleton />
                </div>
                <div className="parent__child-2">
                  <Skeleton />
                </div>
              </div>
              <div className="parent">
                <div className="parent__child-1">
                  <Skeleton />
                </div>
                <div className="parent__child-2">
                  <Skeleton />
                </div>
              </div>
              <div className="parent">
                <div className="parent__child-1">
                  <Skeleton />
                </div>
                <div className="parent__child-2">
                  <Skeleton />
                </div>
              </div>
              <div className="parent">
                <div className="parent__child-1">
                  <Skeleton />
                </div>
                <div className="parent__child-2">
                  <Skeleton />
                </div>
              </div>
              <div className="parent">
                <div className="parent__child-1">
                  <Skeleton />
                </div>
                <div className="parent__child-2">
                  <Skeleton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default AboutGameSkeleton;
