import DOMPurify from "dompurify";

import { useState } from "react";

import { AboutGameProps } from "./AboutGame.interface";
import { setContent } from "../../utils/setContent";
import { formatDateFromString } from "../../utils/formatDateFromString";

import GameAdditions from "../GameAddittions/GameAdditions";
import AboutGameSkeleton from "../Skeletons/AboutGameSkeleton/AboutGameSkeleton";

import "./AboutGame.scss";

const AboutGame = ({
  description,
  metacritic,
  released,
  developers,
  publishers,
  genres,
  platforms,
  isLoading,
  isSuccess,
  website,
}: AboutGameProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const date = formatDateFromString(released);

  const developersElements = developers.map((item, index) => {
    return <div key={index}>{item.name}</div>;
  });
  const publishersElements = publishers.map((item, index) => {
    return <div key={index}>{item.name}</div>;
  });
  const genresElements = genres.map((item) => item.name).join(", ");
  const platformsElements = platforms
    .map((item) => item.platform.name)
    .join(", ");

  let scoreColor = "about-game__metacritic-score";

  if (metacritic !== null && metacritic !== undefined) {
    if (metacritic >= 80) {
      scoreColor += " about-game__metacritic-score_high";
    } else if (metacritic >= 60 && metacritic < 80) {
      scoreColor += " about-game__metacritic-score_middle";
    } else if (metacritic < 60) {
      scoreColor += " about-game__metacritic-score_low";
    }
  }

  const cleanDescription = description ? DOMPurify.sanitize(description) : "";
  const truncatedDescription =
    cleanDescription.slice(0, 470) +
    (cleanDescription.length > 470 ? "..." : "");
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const descriptionButton =
    cleanDescription.length > 470 ? (
      <button
        className="about-game__description-button"
        onClick={toggleDescription}
      >
        {showFullDescription ? "Show less" : "Show more"}
      </button>
    ) : (
      ""
    );

  const content = (
    <>
      <div className="about-game__main-information">
        <div className="about-game__description-block">
          <div
            className={
              showFullDescription
                ? "about-game__description about-game__description_display-block"
                : "about-game__description"
            }
            dangerouslySetInnerHTML={{
              __html: showFullDescription
                ? cleanDescription
                : truncatedDescription,
            }}
          ></div>
          {descriptionButton}
        </div>
        <div className="about-game__summary">
          <div className="parent">
            <div className="parent__child-1">Release:</div>
            <div className="parent__child-2">{date}</div>
          </div>
          <div className="parent">
            <div className="parent__child-1">Developers:</div>
            <div className="parent__child-2">{developersElements}</div>
          </div>
          <div className="parent">
            <div className="parent__child-1">Publishers:</div>
            <div className="parent__child-2">{publishersElements}</div>
          </div>
          <div className="parent">
            <div className="parent__child-1">Genres:</div>
            <div className="parent__child-2">{genresElements}</div>
          </div>
          <div className="parent">
            <div className="parent__child-1">Platforms:</div>
            <div className="parent__child-2">{platformsElements}</div>
          </div>
          <div className="parent">
            <div className="parent__child-1">Official website:</div>
            <div className="parent__child-2">
              <a rel="noopener noreferrer" target="_blank" href={website}>
                Visit the website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const contentObject = {
    isLoading,
    isSuccess,
    isSuccessContent: content,
    isLoadingContent: <AboutGameSkeleton />,
  };
  return (
    <div className="about-game">
      <div className="about-game__container">
        <div className="about-game__metacritic">
          <div className={scoreColor}>{metacritic ? metacritic : "TBA"}</div>
          <div className="about-game__metacritic-label">Metacritic score</div>
        </div>
        {setContent(contentObject)}
        <GameAdditions />
      </div>
    </div>
  );
};

export default AboutGame;
