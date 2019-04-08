import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import OverlayBlur from "./components/overlay-blur";
import Container from "../../../container";

// eslint-disable-next-line
class ModalOverlay extends Component {
  render() {
    const { theme, style, render, ...others } = this.props;

    return render ? (
      <Container
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.overlayColor,
          overflow: "hidden",
          ...style
        }}
        {...others}
      />
    ) : null;
  }
}

ModalOverlay.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object.isRequired,
  render: PropTypes.bool.isRequired
};

export default withTheme(OverlayBlur(ModalOverlay));
