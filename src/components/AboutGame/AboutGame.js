import AboutGameSkeleton from "../Skeletons/AboutGameSkeleton/AboutGameSkeleton";
import { useGetGenresQuery } from "../../api/apiSlice";

import "./AboutGame.scss";
import DOMPurify from "dompurify";
import { formatDateFromString } from "../../utils/formatDateFromString";

const setContent = (isLoading, isSuccess, elements) => {
  if (isLoading) {
    return <AboutGameSkeleton />;
  } else if (isSuccess) {
    return elements;
  }
};

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
}) => {
  const x = useGetGenresQuery();
  console.log(x)

  
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
  if (metacritic >= 80) {
    scoreColor += " about-game__metacritic-score_high";
  } else if (metacritic >= 60 && metacritic < 80) {
    scoreColor += " about-game__metacritic-score_middle";
  } else if (metacritic <= 59) {
    scoreColor += " about-game__metacritic-score_low";
  }
  const cleanDescription = DOMPurify.sanitize(description);
  const content = (
    <>
      <div className="about-game__main-information">
        <div
          className="about-game__description"
          dangerouslySetInnerHTML={{ __html: cleanDescription }}
        ></div>
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
              <a href={website}>Visit the website</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="about-game">
      <div className="about-game__container">
        <div className="about-game__metacritic">
          <div className={scoreColor}>{metacritic}</div>
          <div className="about-game__metacritic-label">Metacritic score</div>
        </div>
        {setContent(isLoading, isSuccess, content)}
      </div>
    </div>
  );
};

export default AboutGame;
