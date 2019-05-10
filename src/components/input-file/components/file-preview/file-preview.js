import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PreviewContainer from "./components/preview-container";
import PreviewImage from "./components/preview-image";
import PreviewVideo from "./components/preview-video";
import PreviewProgress from "./components/preview-progress";
import Icon from "../../../icon";

const FilePreview = ({ as, containerProps, previewStyle, theme, data, type, loadingProgress, ...others }) => (
  <PreviewContainer as={as} style={previewStyle} haveData={data} {...containerProps}>
    {/* eslint-disable-next-line */}
    {data ? (
      // eslint-disable-next-line
      type === "image" ? (
        <PreviewImage data={data} {...others} />
      ) : type === "video" ? (
        <PreviewVideo data={data} {...others} />
      ) : null
    ) : (
      <Icon
        color={theme.secondaryVariantColor}
        // eslint-disable-next-line
        icon={type === "image" ? "file-image" : type === "video" ? "file-video" : undefined}
        size="medium"
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
  as: PropTypes.func,
  // eslint-disable-next-line
  containerProps: PropTypes.object,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  // eslint-disable-next-line
  previewStyle: PropTypes.object,
  // eslint-disable-next-line
  data: PropTypes.any,
  // eslint-disable-next-line
  type: PropTypes.oneOf(["image", "video"]),
  loadingProgress: PropTypes.number
};

export default withTheme(FilePreview);
