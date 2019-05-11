import React from "react";
import ContainerScroll from "../../../../components/container-scroll";

const UserContainer = props => (
  <ContainerScroll
    {...props}
    contentContainerStyle={{
      alignItems: "center",
      paddingTop: 120
    }}
  />
);

export default UserContainer;
