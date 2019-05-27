import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Icon from "../../../icon";
import SelectorContainer from "./components/selector-container";
import SelectorInputImage from "./components/selector-input-image";
import SelectorInputVideo from "./components/selector-input-video";

const FileSelector = ({ theme, type, onSelect, ...others }) => (
  <SelectorContainer {...others}>
    <Icon icon="plus" size="small" color={theme.secondaryVariantColor} />
    {/* eslint-disable-next-line */}
    {type === "image" ? (
      <SelectorInputImage
        style={{ position: "absolute", width: "100%", height: "100%" }}
        onSelect={onSelect}
      />
    ) : type === "video" ? (
      <SelectorInputVideo
        style={{ position: "absolute", width: "100%", height: "100%" }}
        onSelect={onSelect}
      />
    ) : (
      undefined
    )}
  </SelectorContainer>
);

FileSelector.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["image", "video"]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default withTheme(FileSelector);
