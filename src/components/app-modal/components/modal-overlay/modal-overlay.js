import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import OverlayBlur from "./components/overlay-blur";
import Container from "../../../container";

// eslint-disable-next-line
class ModalOverlay extends Component {
  render() {
    const { style, ...others } = this.props;
    return (
      <Container
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          ...style
        }}
        {...others}
      />
    );
  }
}

ModalOverlay.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object.isRequired
};

export default withTheme(OverlayBlur(ModalOverlay));
