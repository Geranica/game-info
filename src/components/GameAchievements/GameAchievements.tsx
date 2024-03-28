import { useGetGameAchievementsQuery } from "../../api/apiSlice";
import { useParams } from "react-router-dom";

import { setContent } from "../../utils/setContent";
import Spinner from "../Spinner/Spinner";

import "./GameAchievements.scss";

interface QueryData {
  name: string;
  image: string;
  description: string;
  percent: string;
}

const GameAchievements = () => {
  const { gameId } = useParams();
  const {
    data: achievements,
    isLoading,
    isSuccess,
  }: {
    data?: QueryData[];
    isLoading: boolean;
    isSuccess: boolean;
  } = useGetGameAchievementsQuery(gameId);

  console.log (achievements)

  const achievementsElements = achievements?.map((item, index) => {
    const styleGradient = {
      background: `linear-gradient(to right, green ${item.percent}%, #121221 ${item.percent}%)`,
    };
    return (
      <li key={index} className="game-achievements__item">
        <div className="game-achievements__image">
          <img src={item.image} alt="" />
        </div>
        <div
          style={styleGradient}
          className="game-achievements__name-description-percent"
        >
          <div className="game-achievements__name-description">
            <div className="game-achievements__name">{item.name}</div>
            <div className="game-achievements__description">
              {item.description}
            </div>
          </div>
          <div className="game-achievements__percent">{item.percent + "%"}</div>
        </div>
      </li>
    );
  });

  const contentData = {
    isLoading,
    isLoadingContent: <Spinner />,
    isSuccess,
    isSuccessContent: (
      <ul className="game-achievements__list">{achievementsElements}</ul>
    ),
  };

  return (
    <section className="game-achievements">
      <div className="game-achievements__container">
        {setContent(contentData)}
      </div>
    </section>
  );
};

export default GameAchievements;
