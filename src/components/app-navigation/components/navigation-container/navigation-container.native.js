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
    this.state = { containerAnimated: new Animated.Value(-70),
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
    if (!isContainerShowed) this.setState({ isContainerShowed: true });
    containerAnimated.setValue(pageX > 70 ? 0 : pageX - 70);
  }

  moveContainerToEnd(event) {
    const { containerAnimated } = this.state;
    const { pageX } = event.nativeEvent;
    this.setState({ isContainerShowed: pageX >= 35 });
    Animated.spring(containerAnimated, {
      toValue: pageX < 35 ? -70 : 0,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true
    }).start();
  }

  render() {
    const { containerAnimated, isContainerShowed } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        {isContainerShowed ? (
          <ContainerOverlay
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
