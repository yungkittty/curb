import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../image";
import Text from "../../../text";

const ImagePreview = styled(({ children, style, src, loadingProgress, ...others }) => (
  // eslint-disable-next-line
  <Container style={style}>
    {src && (
      <Image
        {...others}
        style={{
          width: style[0].width,
          height: style[0].height
        }}
        src={src}
        resizeMode="cover"
      />
    )}
    {loadingProgress && (
      <Container
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, .35)"
        }}
      >
        <Text type="h1" weight={700} style={{ color: "white" }}>
          {`${parseInt(loadingProgress * 100, 10)} %`}
        </Text>
      </Container>
    )}
  </Container>
))`
  position: absolute;
  top: 0px;
  border-radius: 100px;
  overflow: hidden;
  width: ${({ size }) => (size === "small" ? "150" : "180")}px;
  height: ${({ size }) => (size === "small" ? "150" : "180")}px;
  border-width: ${({ src }) => (!src ? "1" : "0")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default ImagePreview;
