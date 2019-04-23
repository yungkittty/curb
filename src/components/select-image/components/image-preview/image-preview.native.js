import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import { ImageBackground } from "react-native";
import Text from "../../../text";

const ImagePreview = styled(({ children, style, src, progress, ...others }) => (
  // eslint-disable-next-line
  <Container style={style}>
    {src && (
      <ImageBackground
        {...others}
        style={{
          width: style[0].width,
          height: style[0].height
        }}
        source={{ uri: src }}
        resizeMode="cover"
      >
        {progress && (
          <Container
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, .35)"
            }}
          >
            <Text type="h1" weight={700} style={{ color: "white" }}>
              {`${parseInt(progress * 100, 10)} %`}
            </Text>
          </Container>
        )}
      </ImageBackground>
    )}
  </Container>
))`
  display: flex;
  align-items: center;
  justify-content: center;
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
