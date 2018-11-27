import React, { Component } from "react";
import Modal from "../../../modal";

const ModalWrapper = props => {
  return class Comp extends Component {
    render() {
      return <Modal {...props} />;
    }
  };
};

export default ModalWrapper;
