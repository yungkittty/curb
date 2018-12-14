import React, { Component } from "react";
import { Dimensions, Animated, Easing } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const ContentSlide = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      const { component } = this.props;

      this.state = {
        component,
        oldComponent: undefined,
        slide: undefined
      };

      this.AnimatedWrappedComponent = Animated.createAnimatedComponent(
        WrappedComponent
      );

      this.slideComponent = this.slideComponent.bind(this);
    }

    slideComponent(newComponent, flow) {
      const { component } = this.state;

      this.setState(
        {
          oldComponent: component,
          component: newComponent,
          slide: new Animated.Value(flow === 1 ? 0 : -deviceWidth)
        },
        () => {
          const { slide } = this.state;
          Animated.timing(slide, {
            toValue: flow === 1 ? -deviceWidth : 0,
            easing: Easing.inOut(Easing.quad),
            duration: 450,
            useNativeDriver: true
          }).start();
        }
      );
    }

    render() {
      const { component, oldComponent, slide } = this.state;

      return (
        <this.AnimatedWrappedComponent
          {...this.props}
          style={{ translateX: slide }}
          slideComponent={this.slideComponent}
          component={component}
          oldComponent={oldComponent}
        />
      );
    }
  };

export default ContentSlide;
