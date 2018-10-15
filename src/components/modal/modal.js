import React, { createElement } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";

const Modal = ({ component, render }) => (
  <ModalOverlay>
    <ModalContainer>
      {component ? createElement(component, null) : render(null)}
    </ModalContainer>
  </ModalOverlay>
);

Modal.defaultProps = { component: undefined, render: undefined };

Modal.propTypes = { component: PropTypes.func, render: PropTypes.func };

export default Modal;
