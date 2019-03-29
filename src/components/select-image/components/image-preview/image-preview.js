import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../image";

const ImagePreview = styled(({ children, className, src, size, ...others }) => {
  const S = size === "small" ? 200 : 320;
  return (
    // eslint-disable-next-line
    <Container className={className}>
      {src && (
        <Image
          {...others}
          style={{ width: `${S}px`, height: `${S}px`, objectFit: "cover" }}
          src={src}
        />
      )}
    </Container>
  );
})`
  position: absolute;
  top: 0px;
  border-radius: 160px;
  overflow: hidden;
  width: ${({ size }) => (size === "small" ? "200" : "320")}px;
  height: ${({ size }) => (size === "small" ? "200" : "320")}px;
  border-width: ${({ src }) => (!src ? "1" : "0")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default ImagePreview;
