import React from "react";
import LoaderContainer from "./components/loader-container";
import LoaderAnimationContainer from "./components/loader-animation-container";
import LoaderAnimationRound from "./components/loader-animation-round";

const Loader = () => (
  <LoaderContainer>
    <LoaderAnimationContainer>
      <LoaderAnimationRound left={6} animationNumber={1} />
      <LoaderAnimationRound left={6} animationNumber={2} />
      <LoaderAnimationRound left={26} animationNumber={2} />
      <LoaderAnimationRound left={45} animationNumber={3} />
    </LoaderAnimationContainer>
  </LoaderContainer>
);

export default Loader;
