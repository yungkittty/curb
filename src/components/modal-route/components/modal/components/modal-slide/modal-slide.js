import React, { Component } from "react";

const ModalSlide = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      const { component } = this.props;

      this.changeComponent = this.changeComponent.bind(this);

      this.state = {
        flow: undefined,
        component,
        oldComponent: undefined
      };
    }

    changeComponent(newComponent, flow) {
      const { data, component } = this.state;

      const modalContent = document.getElementById("modal-content");

      modalContent.style.transition = null;
      modalContent.style.transform =
        flow === 1 ? "translateX(0%)" : "translateX(-50%)";

      this.setState({
        data,
        flow,
        oldComponent: component,
        component: newComponent
      });

      modalContent.style.transition = "all 0.45s ease-in-out";
      modalContent.style.transform =
        flow === 1 ? "translateX(-50%)" : "translateX(0%)";
    }

    render() {
      const { flow, component, oldComponent } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          changeComponent={this.changeComponent}
          flow={flow}
          component={component}
          oldComponent={oldComponent}
        />
      );
    }
  };

export default ModalSlide;
