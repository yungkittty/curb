import React from "react";
import MiddleContainer from "./components/middle-container";
import MiddleTitle from "./components/middle-title";
import MiddleProgress from "./components/middle-progress";

const HeaderMiddle = ({ title, progress }) => (
  <MiddleContainer>
    {title && <MiddleTitle title={title} />}
    {progress && <MiddleProgress progress={progress} />}
  </MiddleContainer>
);

export default HeaderMiddle;
