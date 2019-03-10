import React from "react";
import ContainerScroll from "../../../../components/container-scroll";

const CreateGroupContainer = props => (
  <ContainerScroll
    {...props}
    contentContainerStyle={{
      alignItems: "center",
      paddingTop: 15
    }}
  />
);

export default CreateGroupContainer;
