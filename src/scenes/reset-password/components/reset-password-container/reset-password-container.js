import React from "react";
import ContainerScroll from "../../../../components/container-scroll";

const ResetPasswordContainer = props => (
  <ContainerScroll
    {...props}
    contentContainerStyle={{
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    }}
  />
);

export default ResetPasswordContainer;
