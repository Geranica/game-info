import { useState } from "react";

import "./GameScreenshot.scss";

const GameScreenshot = ({ screenshot }: { screenshot: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalStyles = isModalOpen
    ? "game-screenshot-modal game-screenshot-modal_active"
    : "game-screenshot-modal";

  const toggleModal = () => {
    setIsModalOpen((current) => !current);
  };

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <>
      <div onClick={toggleModal} className="game-screenshot">
        <img src={screenshot} alt={`screenshot-${screenshot}`} />
      </div>
      <div className="">
        <div onClick={toggleModal} className={modalStyles}>
          <img src={screenshot} alt={`screenshot-modal-${screenshot}`} />
        </div>
      </div>
    </>
  );
};

export default GameScreenshot;
