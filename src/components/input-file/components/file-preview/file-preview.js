import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PreviewContainer from "./components/preview-container";
import Image from "../../../image";
import Video from "../../../video";
import PreviewProgress from "./components/preview-progress";
import Icon from "../../../icon";

const FilePreview = ({
  // eslint-disable-line
  as,
  containerProps,
  previewStyle,
  theme,
  data,
  type,
  loadingProgress,
  ...others
}) => (
  <PreviewContainer as={as} style={previewStyle} haveData={data} {...containerProps}>
    {/* eslint-disable-next-line */}
    {data ? (
      // eslint-disable-next-line
      type === "image" ? (
        <Image {...others} src={data} objectFit="cover" style={{ width: "100%", height: "100%" }} />
      ) : type === "video" ? (
        <Video {...others} src={data} objectFit="cover" style={{ width: "100%", height: "100%" }} />
      ) : null
    ) : (
      <Icon
        // eslint-disable-next-line
        icon={type === "image" ? "file-image" : type === "video" ? "file-video" : undefined}
        size="medium"
        color={theme.secondaryVariantColor}
      />
    )}
    {loadingProgress && <PreviewProgress loadingProgress={loadingProgress} />}
  </PreviewContainer>
);

FilePreview.defaultProps = {
  as: undefined,
  containerProps: undefined,
  data: undefined,
  loadingProgress: undefined
};

FilePreview.propTypes = {
  as: PropTypes.func, // eslint-disable-line
  containerProps: PropTypes.object, // eslint-disable-line
  theme: PropTypes.object.isRequired, // eslint-disable-line
  previewStyle: PropTypes.object, // eslint-disable-line
  data: PropTypes.any, // eslint-disable-line
  type: PropTypes.oneOf(["image", "video"]).isRequired,
  loadingProgress: PropTypes.number
};

export default withTheme(FilePreview);
