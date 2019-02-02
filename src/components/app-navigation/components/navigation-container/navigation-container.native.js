import React from "react";
import PropTypes from "prop-types";
import { PanResponder, Animated } from "react-native";
import ContainerContainer from "./components/container-container";
import ContainerContentContainer from "./components/container-content-container";
import ContainerZipper from "./components/container-zipper";

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { containerContainer: new Animated.ValueXY({ x: -70 }) };
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.moveContainerTo.bind(this),
      onPanResponderRelease: this.moveContainerToEnd.bind(this)
    });
  }

  moveContainerTo(event) {
    const { containerContainer } = this.state;
    const { pageX } = event.nativeEvent;
    containerContainer.setValue({ x: pageX > 70 ? 0 : pageX - 70 });
  }

  moveContainerToEnd(event) {
    const { containerContainer } = this.state;
    const { pageX } = event.nativeEvent;
    containerContainer.setValue({ x: pageX < 35 ? -70 : 0 });
  }

  render() {
    const { containerContainer } = this.state;
    const { children } = this.props;
    return (
      <ContainerContainer style={containerContainer.getLayout()}>
        <ContainerContentContainer>
          {children}
        </ContainerContentContainer>
        <ContainerZipper
          {...this.panResponder.panHandlers}
          hitSlop={{ top: 15, right: 20, bottom: 15 }}
        />
      </ContainerContainer>
    );
  }
}

NavigationContainer.propTypes = { children: PropTypes.node.isRequired };

export default NavigationContainer;
