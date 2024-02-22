import "./GamePage.scss";



const GamePage = (props) => {
   
  const backgroundImage = {
    backgroundImage: `url(${props.backgroundImage})`,
  };


  return (
    <section className="game-page" style={backgroundImage}>
      <div className="game-page__container container">
        <div className="game-page__content-block">
          <div className="game-page__about-game">
            <h2 className="game-page__name">Withcer 3</h2>
            <div className="game-page__description">
              Hollow Knight: Silksong is the epic sequel to Hollow Knight, the
              epic action-adventure of bugs and heroes. As the lethal hunter
              Hornet, journey to all-new lands, discover new powers, battle vast
              hordes of bugs and beasts and uncover ancient secrets tied to your
              nature and your past.
            </div>
          </div>
          <div className="game-page__screenshots">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePage;
