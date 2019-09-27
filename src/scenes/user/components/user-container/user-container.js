import React from "react";
import ContainerScroll from "../../../../components/container-scroll";

const UserContainer = props => (
  <ContainerScroll
    // eslint-disable-line
    {...props}
    contentContainerStyle={{ alignItems: "center" }}
  />
);

export default UserContainer;
