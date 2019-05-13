import React from "react";
import ContainerScroll from "../container-scroll";

const AppModalSceneContainer = ({ ...others }) => (
  <ContainerScroll
    {...others}
    contentContainerStyle={{
      display: "flex",
      position: "relative",
      flexGrow: 1,
      alignItems: "center"
    }}
  />
);

export default AppModalSceneContainer;
