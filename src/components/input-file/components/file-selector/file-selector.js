import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonFloat from "../../../button-float";
import Icon from "../../../icon";
import InputImage from "../../../input-image";
import InputVideo from "../../../input-video";

const FileSelector = ({ type, onSelect, theme }) => (
  <ButtonFloat
    // eslint-disable-line
    diameter="extra-small"
    style={{ bottom: -20, right: undefined }}
  >
    <React.Fragment>
      <Icon
        // eslint-disable-line
        icon="plus"
        size="extra-small"
        color={theme.secondaryVariantColor}
      />
      {/* eslint-disable-next-line */}
      {type === "image" ? (
        <InputImage
          onSelect={onSelect}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
        />
      ) : type === "video" ? (
        <InputVideo
          onSelect={onSelect}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
        />
      ) : null}
    </React.Fragment>
  </ButtonFloat>
);

FileSelector.propTypes = {
  type: PropTypes.oneOf(["image", "video"]).isRequired,
  onSelect: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(FileSelector);
