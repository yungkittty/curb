import React from "react";
import styled from "styled-components";
import Image from "../../../../../../../../../image";
import Container from "../../../../../../../../../container";

const PreviewImage = styled(({ ...others }) => (
  <React.Fragment>
    <Image {...others} />
    <Container
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.25)"
      }}
    />
  </React.Fragment>
))`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default PreviewImage;
