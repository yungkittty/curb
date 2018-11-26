import React, { Component } from "react";

const ModalWrapper = (Modal, props) => {
  return class Comp extends Component {
    render() {
      return <Modal {...props} />;
    }
  };
};

export default ModalWrapper;
