import React from "react";
import PropTypes from "prop-types";
import { PanResponder, Animated } from "react-native";
import ContainerOverlay from "./components/container-overlay";
import ContainerContainer from "./components/container-container";
import ContainerContentContainer from "./components/container-content-container";
import ContainerZipper from "./components/container-zipper";

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { containerAnimated: new Animated.ValueXY({ x: -70, y: 0 }),
      isContainerShowed: false };
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.moveContainerTo.bind(this),
      onPanResponderRelease: this.moveContainerToEnd.bind(this)
    });
  }

  moveContainerTo(event) {
    const { containerAnimated, isContainerShowed } = this.state;
    const { pageX } = event.nativeEvent;
    containerAnimated.setValue({ x: pageX > 70 ? 0 : pageX - 70 });
    if (!isContainerShowed) this.setState({ isContainerShowed: true });
  }

  moveContainerToEnd(event) {
    const { containerAnimated } = this.state;
    const { pageX } = event.nativeEvent;
    containerAnimated.setValue({ x: pageX < 35 ? -70 : 0 });
    this.setState({ isContainerShowed: pageX >= 35 });
  }

  render() {
    const { containerAnimated, isContainerShowed } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        {isContainerShowed ? (
          <ContainerOverlay
            style={{
              opacity: containerAnimated.x.interpolate({
                inputRange: [-70, 0],
                outputRange: [0, 0.25]
              })
            }}
          />
        ) : null}
        <ContainerContainer style={containerAnimated.getLayout()}>
          <ContainerContentContainer>
            {children}
          </ContainerContentContainer>
          <ContainerZipper
            {...this.panResponder.panHandlers}
            hitSlop={{ top: 20, right: 20, bottom: 20 }}
          />
        </ContainerContainer>
      </React.Fragment>
    );
  }
}

NavigationContainer.propTypes = { children: PropTypes.node.isRequired };

export default NavigationContainer;
