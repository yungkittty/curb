import React from "react";
import ContainerScroll from "../../../../components/container-scroll";

const CreateGroupContainer = props => (
  <ContainerScroll
    {...props}
    contentContainerStyle={{
      position: "relative",
      alignItems: "center"
    }}
  />
);

export default CreateGroupContainer;
