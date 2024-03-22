import { useParams } from "react-router-dom";
import { useGetGameAdditionsQuery } from "../../api/apiSlice";
import { formatDateFromString } from "../../utils/formatDateFromString";

import "./GameAdditions.scss";

const GameAdditions = () => {
  const { gameId } = useParams();
  const { data: additions = [] } = useGetGameAdditionsQuery(gameId);

  const items = additions.map((item) => {
    const date = formatDateFromString(item.released);
    return (
      <div key={item.id} className="game-additions__item">
        <div className="game-additions__item-content">
          <div className="game-additions__image">
            <img src={item.background} alt="game-additions-img" />
          </div>
          <div className="game-additions__name">{item.gameName}</div>
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
  return (
    <section className="game-additions">
      <div className="game-additions__container">
        <h2 className="game-additions__titel">Additions:</h2>
        <div className="game-additions__block"> {content}</div>
      </div>
    </section>
  );
};

export default GameAdditions;
