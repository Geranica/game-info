import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ANIMATION_TIME } from "./const";
import { ReactNode } from "react";
import "./LauoutModal.scss";

const LayoutModal = ({
  onClose,
  children,
  opened,
}: {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div className="layout-modal-container">
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames="overlay"
      >
        <div
          ref={overlayRef}
          className="layout-modal-overlay"
          onClick={onClose}
        />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames="content"
      >
        <div ref={contentRef} className="layout-modal-content">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default LayoutModal;
