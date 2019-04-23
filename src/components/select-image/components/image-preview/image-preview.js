import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import Image from "../../../image";
import Text from "../../../text";

const ImagePreview = styled(({ children, className, src, size, progress, ...others }) => {
  const S = size === "small" ? 200 : 320;
  return (
    <Container className={className}>
      {src && (
        <Image
          {...others}
          style={{
            width: `${S}px`,
            height: `${S}px`,
            objectFit: "cover",
            filter: progress && "brightness(0.65)"
          }}
          src={src}
        />
      )}
      {progress && (
        <Text type="h1" weight={700} style={{ position: "absolute", color: "white" }}>
          {`${parseInt(progress * 100, 10)} %`}
        </Text>
      )}
    </Container>
  );
})`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 160px;
  position: absolute;
  top: 0px;
  overflow: hidden;
  width: ${({ size }) => (size === "small" ? "200" : "320")}px;
  height: ${({ size }) => (size === "small" ? "200" : "320")}px;
  border-width: ${({ src }) => (!src ? "1" : "0")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default ImagePreview;
