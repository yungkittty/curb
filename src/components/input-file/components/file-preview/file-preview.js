import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import PreviewContainer from "./components/preview-container";
import PreviewImage from "./components/preview-image";
import PreviewProgress from "./components/preview-progress";
import Icon from "../../../icon";

const FilePreview = ({ style, theme, data, type, loadingProgress, ...others }) => (
  <PreviewContainer style={style} haveData={data}>
    {/* eslint-disable-next-line */}
    {data ? (
      type === "image" ? (
        <PreviewImage data={data} {...others} />
      ) : null
    ) : (
      <Icon
        color={theme.secondaryVariantColor}
        icon={type === "image" ? "file-image" : undefined}
        size="medium"
      />
    )}
    {loadingProgress && <PreviewProgress style={style} loadingProgress={loadingProgress} />}
  </PreviewContainer>
);

FilePreview.defaultProps = {
  data: undefined,
  loadingProgress: undefined
};

FilePreview.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object,
  // eslint-disable-next-line
  data: PropTypes.any,
  // eslint-disable-next-line
  type: PropTypes.oneOf(["image"]),
  loadingProgress: PropTypes.number
};

export default withTheme(FilePreview);
