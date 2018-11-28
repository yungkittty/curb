import React, { Component, createElement } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalContent from "./components/modal-content";
import ModalButton from "./components/modal-button";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: undefined,
      leftIcon: undefined,
      leftClick: undefined,
      rightIcon: "times",
      rightClick: { pathname: "/" },
      button: undefined,
      buttonClick: undefined
    };

    this.setTitle = this.setTitle.bind(this);
    this.setLeftIcon = this.setLeftIcon.bind(this);
    this.setLeftClick = this.setLeftClick.bind(this);
    this.setRightIcon = this.setRightIcon.bind(this);
    this.setRightCick = this.setRightCick.bind(this);
    this.setButton = this.setButton.bind(this);
    this.setButtonClick = this.setButtonClick.bind(this);
  }

  setTitle(title) {
    this.setState({ title });
  }

  setLeftIcon(leftIcon) {
    this.setState({ leftIcon });
  }

  setLeftClick(leftClick) {
    this.setState({ leftClick });
  }

  setRightIcon(rightIcon) {
    this.setState({ rightIcon });
  }

  setRightCick(rightClick) {
    this.setState({ rightClick });
  }

  setButton(button) {
    this.setState({ button });
  }

  setButtonClick(buttonClick) {
    this.setState({ buttonClick });
  }

  render() {
    const {
      setTitle,
      setLeftIcon,
      setLeftClick,
      setRightIcon,
      setRightCick,
      setButton,
      setButtonClick
    } = this;

    const { progress, component, render, ...others } = this.props;

    const {
      title,
      leftIcon,
      leftClick,
      rightIcon,
      rightClick,
      button,
      buttonClick
    } = this.state;

    const props = {
      setTitle,
      setLeftIcon,
      setLeftClick,
      setRightIcon,
      setRightCick,
      setButton,
      setButtonClick,
      ...others
    };

    return (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader
            title={title}
            progress={progress}
            leftIcon={leftIcon}
            leftClick={leftClick}
            rightIcon={rightIcon}
            rightClick={rightClick}
          />
          <ModalContent>
            {/* eslint-disable-next-line */}
            {component
              ? createElement(component, props)
              : render
                ? render(props)
                : null}
          </ModalContent>
          {button && <ModalButton button={button} buttonClick={buttonClick} />}
        </ModalContainer>
      </ModalOverlay>
    );
  }
}

Modal.defaultProps = {
  progress: undefined,
  component: undefined,
  render: undefined
};

Modal.propTypes = {
  progress: PropTypes.shape({ progress: Number, total: Number }),
  component: PropTypes.func,
  render: PropTypes.func
};

export default Modal;
