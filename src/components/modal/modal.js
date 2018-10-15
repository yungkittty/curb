import React from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";

const Modal = ({ component }) => (
  <ModalOverlay>
    <ModalContainer>{component()}</ModalContainer>
  </ModalOverlay>
);

Modal.propTypes = { component: PropTypes.func.isRequired };

export default Modal;
