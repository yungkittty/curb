import React, { Component } from "react";

const ModalSlide = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.setComponent = this.setComponent.bind(this);
    }

    setComponent(newComponent, flow) {
      this.setState();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default ModalSlide;
