import React from "react";
import PropTypes from "prop-types";
import { PanResponder, Animated, Easing } from "react-native";
import ContainerOverlay from "./components/container-overlay";
import ContainerContainer from "./components/container-container";
import ContainerContentContainer from "./components/container-content-container";
import ContainerZipper from "./components/container-zipper";

// https://github.com/facebook/react-native/issues/16250#issuecomment-335401902

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.moveContainer = this.moveContainer.bind(this);
    this.moveContainerTo = this.moveContainerTo.bind(this);
    this.moveContainerToEnd = this.moveContainerToEnd.bind(this);
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: this.moveContainer,
      onPanResponderRelease: this.moveContainerToEnd });
    this.state = {
      containerAnimated: new Animated.Value(-70),
      isContainerShowed: false
    };
  }

  moveContainer(event) {
    const { containerAnimated, isContainerShowed } = this.state;
    const { pageX } = event.nativeEvent;
    if (!isContainerShowed) this.setState({ isContainerShowed: true });
    containerAnimated.setValue(pageX > 70 ? 0 : pageX - 70);
  }

  moveContainerTo(toBegin) {
    const { containerAnimated, isContainerShowed } = this.state;
    if (!isContainerShowed) this.setState({ isContainerShowed: true });
    Animated.spring(containerAnimated, {
      toValue: toBegin ? 0 : -70,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true
    }).start();
    this.setState({ isContainerShowed: toBegin });
  }

  moveContainerToEnd(event) {
    const { pageX } = event.nativeEvent;
    const toBegin = pageX >= 35;
    this.moveContainerTo(toBegin);
  }

  render() {
    const { isContainerShowed, containerAnimated } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        {isContainerShowed ? (
          <ContainerOverlay
            onPressIn={() => this.moveContainerTo(false)}
            style={{
              opacity: containerAnimated.interpolate({
                inputRange: [-70, 0],
                outputRange: [0, 0.25]
              })
            }}
          />
        ) : null}
        <ContainerContainer style={{ transform: [{ translateX: containerAnimated }] }}>
          <ContainerContentContainer>
            {/* eslint-disable-line */}
            {children(() => this.moveContainerTo(false))}
          </ContainerContentContainer>
          <ContainerZipper
            // eslint-disable-line
            {...this.panResponder.panHandlers}
            hitSlop={{ top: 10, right: 10, bottom: 10 }}
          />
        </ContainerContainer>
      </React.Fragment>
    );
  }
}

NavigationContainer.propTypes = {
  children: PropTypes.func.isRequired
};

export default NavigationContainer;
