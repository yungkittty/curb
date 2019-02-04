import React from "react";
import ContainerScroll from "../../../../components/container-scroll";

const SignInContainer = props => (
  <ContainerScroll
    {...props}
    contentContainerStyle={{
      justifyContent: "center",
      alignItems: "center"
    }}
  />
);

export default SignInContainer;
