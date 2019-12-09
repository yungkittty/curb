import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";
import CloseContainer from "./components/close-container";
import CloseIcon from "./components/close-icon";

const OverlayClose = ({ theme, onClose }) => (
  <CloseContainer onClick={onClose} hoverColor={theme.primaryColor}>
    <CloseIcon icon="times" color={theme.secondaryVariantColor} />
  </CloseContainer>
);

OverlayClose.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  onClose: PropTypes.func.isRequired
};

export default withTheme(OverlayClose);
