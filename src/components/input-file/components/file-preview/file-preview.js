import React from "react";
import styled from "styled-components";
import Container from "../../../container";
import PreviewImage from "./components/preview-image";
import Text from "../../../text";

const FilePreview = styled(({ className, style, data, type, loadingProgress, ...others }) => (
  <Container className={className} style={style}>
    {data && type === "image" ? <PreviewImage data={data} {...others} /> : undefined}
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
        <Text type="h1" weight={700} style={{ color: "white" }}>
          {`${parseInt(loadingProgress * 100, 10)} %`}
        </Text>
      </Container>
    )}
  </Container>
))`
  overflow: hidden;
  border-width: ${({ data }) => (data ? "0" : "1")}px;
  border-color: ${({ theme }) => theme.secondaryColor};
  border-style: solid;
`;

export default FilePreview;
