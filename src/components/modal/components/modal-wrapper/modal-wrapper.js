import React, { Component } from "react";

const ModalWrapper = (Modal, props) => {
  return class Comp extends Component {
    componentDidMount() {
      document.getElementById("app").style.filter = "blur(3.5px)";
    }

    componentWillUnmount() {
      document.getElementById("app").style.filter = "blur(0px)";
    }

    render() {
      return <Modal {...props} />;
    }
  };
};

export default ModalWrapper;
