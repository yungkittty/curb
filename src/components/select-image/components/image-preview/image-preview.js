import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../image";

const ImagePreview = styled(({ children, className, src, ...others }) => (
  // eslint-disable-next-line
  <Container className={className}>
    {src && <Image {...others} src={src} />}
  </Container>
))`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0px;
  border-radius: 140px;
  overflow: hidden;
  width: ${({ size }) => (size === "small" ? "200" : "320")}px;
  height: ${({ size }) => (size === "small" ? "200" : "320")}px;
  border-width: ${({ src }) => (!src ? "1" : "0")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default ImagePreview;
