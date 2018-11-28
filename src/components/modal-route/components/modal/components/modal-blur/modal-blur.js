import React, { Component } from "react";

const ModalBlur = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      document.getElementById("app-container").style.filter = "blur(3.5px)";
    }

    componentWillUnmount() {
      document.getElementById("app-container").style.filter = "blur(0px)";
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default ModalBlur;
