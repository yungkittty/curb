import React, { Component } from "react";
import Modal from "../..";

const ModalWrapper = props =>
  /* eslint-disable-next-line */
  class Comp extends Component {
    render() {
      return <Modal {...props} />;
    }
  };

export default ModalWrapper;
