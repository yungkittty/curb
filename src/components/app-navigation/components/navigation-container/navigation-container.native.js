import React from "react";
import PropTypes from "prop-types";
import { PanResponder, Animated } from "react-native";
import ContainerContainer from "./components/container-container";
import ContainerContentContainer from "./components/container-content-container";
import ContainerZipper from "./components/container-zipper";

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    // Position => Container
    this.state = { containerPosition: new Animated.ValueXY({ x: -70, y: 0 }) };
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.moveContainerTo.bind(this),
      onPanResponderRelease: this.moveContainerToEnd.bind(this)
    });
  }

  moveContainerTo(event) {
    const { containerPosition } = this.state;
    const { pageX } = event.nativeEvent;
    const containerX = pageX > 70 ? 0 : pageX - 70;
    containerPosition.setValue({ x: containerX });
  }

  moveContainerToEnd(event) {
    const { containerPosition } = this.state;
    const { pageX } = event.nativeEvent;
    containerPosition.setValue({ x: pageX < 35 ? -70 : 0 });
  }

  render() {
    const { containerPosition } = this.state;
    const { children } = this.props;
    return (
      <ContainerContainer
        style={[
          containerPosition.getLayout(),
          // ...
          {
            backgroundColor: containerPosition.x.interpolate({
              inputRange: [-70, 0],
              outputRange: ["rgba(0,0,0,0)", "rgba(0,0,0,0.25)"]
            })
          }
          // ...
        ]}
      >
        <ContainerContentContainer>
          {/* eslint-disable-next-line */}
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
