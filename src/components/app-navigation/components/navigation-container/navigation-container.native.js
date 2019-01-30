import React from "react";
import { PanResponder } from "react-native";
import PropTypes from "prop-types";
import ContainerContainer from "./components/container-container";
import ContainerContentContainer from "./components/container-content-container";
import ContainerZipper from "./components/container-zipper";

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);

    // ...

    // ...

    this.panRespond = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: () => true,
      onPanResponderRelease: () => true
    });
  }

  

  render() {
    const { children } = this.props;
    return (
      <ContainerContainer>
        <ContainerContentContainer>
          {/* eslint-disable-next-line */}
          {children}
        </ContainerContentContainer>
        <ContainerZipper {...this.panRespond.panHandlers} />
      </ContainerContainer>
    );
  }
}

NavigationContainer.propTypes = { children: PropTypes.node.isRequired };

export default NavigationContainer;
