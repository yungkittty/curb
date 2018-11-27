import React, { Component, createElement } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ContentContainer from "./components/modal-content/components/content-container";
import ModalButton from "./components/modal-button";

class Modal extends Component {
  constructor(props) {
    super(props);
    const {
      progress,
      content,
      multiContent,
      component,
      render,
      ...others
    } = this.props;

    this.state = {
      title: undefined,
      progress: progress,
      leftIcon: undefined,
      leftClick: undefined,
      rightIcon: "times",
      rightClick: { pathname: "/" },
      component: component,
      render: render,
      multiContent: multiContent,
      button: undefined,
      buttonClick: undefined,
      others: others
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
      state,
      setTitle,
      setLeftIcon,
      setLeftClick,
      setRightIcon,
      setRightCick,
      setButton,
      setButtonClick
    } = this;

    const {
      title,
      progress,
      leftIcon,
      leftClick,
      rightIcon,
      rightClick,
      component,
      render,
      button,
      buttonClick,
      others
    } = state;

    const prop = {
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
          {/* eslint-disable-next-line */}
          <ContentContainer>
            {component
              ? createElement(component, prop)
              : render
                ? render(prop)
                : null}
          </ContentContainer>
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
  progress: PropTypes.object,
  component: PropTypes.func,
  render: PropTypes.func
};

export default Modal;
