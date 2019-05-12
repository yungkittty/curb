import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ButtonFloat from "../../../button-float";
import Icon from "../../../icon";
import SelectorInputImage from "./components/selector-input-image";
import { platformBools } from "../../../../configurations/platform";

const FileSelector = ({ type, onSelect, theme }) => (
  <ButtonFloat
    // eslint-disable-line
    diameter="extra-small"
    style={{ bottom: platformBools.isReact ? -20 : -15 }}
  >
    <React.Fragment>
      <Icon
        // eslint-disable-line
        icon="plus"
        size="extra-small"
        color={theme.secondaryVariantColor}
      />
      {type === "image" ? (
        <SelectorInputImage
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
  type: PropTypes.oneOf(["image"]).isRequired,
  onSelect: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(FileSelector);
