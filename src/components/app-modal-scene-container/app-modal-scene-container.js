import React from "react";
import ContainerScroll from "../container-scroll";

const AppModalSceneContainer = props => (
  <ContainerScroll
    {...props}
    contentContainerStyle={{
      position: "relative",
      alignItems: "center"
    }}
  />
);

export default AppModalSceneContainer;
