import React, { Component } from "react";

const ContentSlide = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      const { component } = this.props;

      this.state = {
        component,
        oldComponent: undefined
      };

      this.slideComponent = this.slideComponent.bind(this);
    }

    slideComponent(newComponent, flow) {
      const { component } = this.state;

      const modalContent = document.getElementById("modal-content");

      modalContent.style.transition = null;
      modalContent.style.transform =
        flow === 1 ? "translateX(0%)" : "translateX(-50%)";

      this.setState({
        oldComponent: component,
        component: newComponent
      });

      setTimeout(() => {
        modalContent.style.transition = "all 0.45s ease-in-out";
        modalContent.style.transform =
          flow === 1 ? "translateX(-50%)" : "translateX(0%)";
      }, 30);
    }

    render() {
      const { component, oldComponent } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          slideComponent={this.slideComponent}
          component={component}
          oldComponent={oldComponent}
        />
      );
    }
  };

export default ContentSlide;
