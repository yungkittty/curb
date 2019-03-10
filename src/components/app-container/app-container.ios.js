import React from "react";
import PropTypes from "prop-types";
import { Dimensions, NativeModules } from "react-native";
import { withTheme } from "styled-components";
import Container from "../container";

const { StatusBarManager } = NativeModules;

// https://stackoverflow.com/a/49718504

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statusBarHeight: 0 };
  }

  componentDidMount() {
    StatusBarManager.getHeight(({ height: statusBarHeight }) =>
      this.setState({ statusBarHeight })
    );
  }

  render() {
    const { theme: { backgroundColor }, ...others } = this.props;
    const { statusBarHeight } = this.state;
    return (
      <Container
        {...others}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height - statusBarHeight,
          marginTop: statusBarHeight,
          backgroundColor
        }}
      />
    );
  }
}

AppContainer.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(AppContainer);
