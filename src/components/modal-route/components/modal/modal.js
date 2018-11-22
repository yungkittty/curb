import React, { createElement } from "react";
import PropTypes from "prop-types";
import ModalContainer from "./components/modal-container";

const Modal = ({ component, render, ...others }) => (
  <ModalContainer>
    {/* eslint-disable-next-line */}
    {component
      ? createElement(component, others)
      : render
        ? render(others)
        : null}
  </ModalContainer>
);

Modal.defaultProps = { component: undefined, render: undefined };

Modal.propTypes = { component: PropTypes.func, render: PropTypes.func };

export default Modal;
