<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import { Dimensions, NativeModules/* , Keyboard */ } from "react-native";
import { withTheme } from "styled-components";
=======
import { Dimensions } from "react-native";
import styled from "styled-components";
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16
import Container from "../container";
import { windowDimensions } from "../../configurations/window";

const AppContainer = styled(Container)`
  width: 100%;
  height: 100%;
  margin-top: ${Dimensions.get("window").height - windowDimensions.height};
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;
`;

<<<<<<< HEAD
// https://stackoverflow.com/a/49718504

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    /* this.setContainerWithKeys = this.setContainerWithKeys.bind(this);
    this.setContainerWithoutKeys = this.setContainerWithoutKeys.bind(this);
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", this.setContainerWithKeys);
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", this.setContainerWithoutKeys); */
    this.state = {
      containerWidth: windowWidth,
      containerHeight: windowHeight,
      statusBarHeight: 0
    };
  }

  componentDidMount() {
    StatusBarManager.getHeight(({ height: statusBarHeight }) =>
      this.setState({ statusBarHeight }));
  }

  /* componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  } */

  /* setContainerWithKeys(event) {
    const { height: windowHeight } = Dimensions.get("window");
    const { height: keyboardHeight } = event.endCoordinates;
    this.setState({ containerHeight: windowHeight - keyboardHeight });
  } */

  /* setContainerWithoutKeys() {
    const { height: windowHeight } = Dimensions.get("window");
    this.setState({ containerHeight: windowHeight });
  } */

  render() {
    const { theme: { backgroundColor }, ...others } = this.props;
    const { containerWidth, containerHeight, statusBarHeight } = this.state;
    return (
      <Container
        {...others}
        style={{
          width: containerWidth,
          height: containerHeight - statusBarHeight,
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
=======
export default AppContainer;
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16
