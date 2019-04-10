import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ContainerAnimation from "./components/container-animation";
import Container from "../../../container";

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { theme, style, children, ...others } = this.props;
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.backgroundColor,
          overflow: "hidden",
          ...style
        }}
        {...others}
      >
        {children}
      </Container>
    );
  }
}

ModalContainer.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default withTheme(ContainerAnimation(ModalContainer));
