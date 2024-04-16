import { useState } from "react";
import SimpleAnimatedModal from "../Modal/SimpleAnimatedModal/SimpleAnimatedModal";

import "./GameScreenshot.scss";

const GameScreenshot = ({ screenshot }: { screenshot: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <SimpleAnimatedModal opened={isModalOpen} onClose={toggleModal}>
        <div className="game-screenshot-modal-content">
          <img src={screenshot} alt={`screenshot-modal-${screenshot}`} />
        </div>
      </SimpleAnimatedModal>
    </>
  );
};

export default GameScreenshot;
