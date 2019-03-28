import React from "react";
import styled from "styled-components";
import Image from "../../../image";
import Container from "../../../container";

const ImagePreview = styled(({ children, style, src, ...others }) => (
  // eslint-disable-next-line
  <Container style={style}>
    {src && (
      <Image
        {...others}
        style={{ width: style[0].width, height: style[0].height }}
        src={src}
        resizeMode="cover"
      />
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
