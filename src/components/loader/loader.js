import React from "react";
import LoaderContainer from "./components/loader-container";
import LoaderAnimationContainer from "./components/loader-animation-container";
import LoaderAnimationRound from "./components/loader-animation-round";

const Loader = () => (
  <LoaderContainer>
    <LoaderAnimationContainer>
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.036, top: 63, left: 63 }} />
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.072, top: 68, left: 56 }} />
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.108, top: 71, left: 48 }} />
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.144, top: 72, left: 40 }} />
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.18, top: 71, left: 32 }} />
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.216, top: 68, left: 24 }} />
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.252, top: 63, left: 17 }} />
      <LoaderAnimationRound roundConfig={{ animationDelay: -0.288, top: 56, left: 12 }} />
    </LoaderAnimationContainer>
  </LoaderContainer>
);

export default Loader;
