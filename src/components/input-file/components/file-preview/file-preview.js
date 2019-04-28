import React from "react";
import styled, { withTheme } from "styled-components";
import Container from "../../../container";
import PreviewImage from "./components/preview-image";
import PreviewLoadingText from "./components/preview-loading-text";
import Icon from "../../../icon";

const FilePreview = styled(({ className, style, theme, data, type, loadingProgress, ...others }) => (
  <Container className={className} style={style}>
    {/* eslint-disable-next-line */}
    {data ? (
      type === "image" ? (
        <PreviewImage data={data} {...others} />
      ) : (
        undefined
      )
    ) : (
      <Icon
        color={theme.secondaryVariantColor}
        icon={type === "image" ? "file-image" : undefined}
        size="medium"
      />
    )}
    {loadingProgress && (
      <Container
        style={{
          borderRadius: style && style.borderRadius,
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, .35)"
        }}
      >
        <PreviewLoadingText type="h1" weight={700}>
          {`${parseInt(loadingProgress * 100, 10)} %`}
        </PreviewLoadingText>
      </Container>
    )}
  </Container>
))`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: ${({ data }) => (data ? "0" : "1")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default withTheme(FilePreview);
