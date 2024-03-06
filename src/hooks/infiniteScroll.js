import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useInfiniteScroll = (handleIsVisible) => {
  const [targetElement, targetElementIsVisible] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (targetElementIsVisible) {
      handleIsVisible();
    }
  }, [targetElementIsVisible]);

  return {
    targetElement,
  };
};

export default useInfiniteScroll;
