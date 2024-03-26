import { CSSProperties } from "react";

const Spinner = () => {
  const svgStyles: CSSProperties = {
    //margin: "auto",
    display: "block",
    shapeRendering: "auto",
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      //xmlns:xlink="http://www.w3.org/1999/xlink"
      style={svgStyles}
      width="100px"
      height="60px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="84" cy="50" r="10" fill="#93dbe9">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.641025641025641s"
          calcMode="spline"
          keyTimes="0;1"
          values="7;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values="#93dbe9;#3b4368;#5e6fa3;#689cc5;#93dbe9"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#93dbe9">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;7;7;7"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill="#689cc5">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;7;7;7"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.641025641025641s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.641025641025641s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill="#5e6fa3">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;7;7;7"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.282051282051282s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.282051282051282s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill="#3b4368">
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;7;7;7"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.923076923076923s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="2.564102564102564s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.923076923076923s"
        ></animate>
      </circle>
    </svg>
  );
};

export default Spinner;
