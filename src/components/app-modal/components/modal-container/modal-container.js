import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ContainerAnimation from "./components/container-animation";
import Container from "../../../container";

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { children: undefined };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isAppModalShowed, render, style } = this.props;
    const { children: stateChildren } = this.state;

    return (
      nextProps.isAppModalShowed !== isAppModalShowed ||
      nextProps.render !== render ||
      nextProps.style !== style ||
      nextState.children !== stateChildren
    );
  }

  componentDidUpdate(prevProps) {
    const { isAppModalShowed, render } = this.props;
    const { children } = this.state;

    if (!isAppModalShowed && render && children === undefined) {
      // eslint-disable-next-line
      this.setState({ children: prevProps.children });
      setTimeout(() => this.setState({ children: undefined }), 500);
    }
  }

  render() {
    const {
      children,
      theme,
      style,
      render,
      isAppModalShowed,
      ...others
    } = this.props;
    const { children: stateChildren } = this.state;

    return render ? (
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
        {isAppModalShowed ? children : stateChildren}
      </Container>
    ) : null;
  }
}

ModalContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,

  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  // eslint-disable-next-line
  style: PropTypes.object.isRequired,
  render: PropTypes.bool.isRequired,
  isAppModalShowed: PropTypes.bool.isRequired
};

export default withTheme(ContainerAnimation(ModalContainer));
