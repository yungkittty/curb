import React, { Component, createElement } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalButtonText from "./components/modal-button-text";
import ModalBlur from "./components/modal-blur";

class Modal extends Component {
  constructor(props) {
    super(props);

    const {
      history: { goBack }
    } = this.props;

    this.state = {
      title: undefined,
      progress: undefined,
      leftIcon: undefined,
      leftClick: undefined,
      rightIcon: "times",
      rightClick: goBack,
      buttonTitle: undefined,
      buttonClick: undefined
    };

    this.setTitle = this.setTitle.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.setLeftIcon = this.setLeftIcon.bind(this);
    this.setLeftClick = this.setLeftClick.bind(this);
    this.setRightIcon = this.setRightIcon.bind(this);
    this.setRightCick = this.setRightCick.bind(this);
    this.setButtonTitle = this.setButtonTitle.bind(this);
    this.setButtonClick = this.setButtonClick.bind(this);
  }

  setTitle(title) {
    this.setState({ title });
  }

  setProgress(progress) {
    this.setState({ progress });
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

  setButtonTitle(buttonTitle) {
    this.setState({ buttonTitle });
  }

  setButtonClick(buttonClick) {
    this.setState({ buttonClick });
  }

  render() {
    const {
      setTitle,
      setProgress,
      setLeftIcon,
      setLeftTo,
      setLeftClick,
      setRightIcon,
      setRightTo,
      setRightCick,
      setButtonTitle,
      setButtonClick
    } = this;

    const { component, render, ...others } = this.props;

    const {
      title,
      progress,
      leftIcon,
      leftClick,
      rightIcon,
      rightClick,
      buttonTitle,
      buttonClick
    } = this.state;

    const props = {
      setTitle,
      setProgress,
      setLeftIcon,
      setLeftTo,
      setLeftClick,
      setRightIcon,
      setRightTo,
      setRightCick,
      setButtonTitle,
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
          {component
            ? createElement(component, props)
            : render
            ? render(props)
            : null}
          {buttonTitle && (
            <ModalButtonText
              type="h3"
              text={buttonTitle}
              onClick={buttonClick}
            />
          )}
        </ModalContainer>
      </ModalOverlay>
    );
  }
}

Modal.defaultProps = {
  history: undefined,
  component: undefined,
  render: undefined
};

Modal.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }),
  component: PropTypes.func,
  render: PropTypes.func
};

export default ModalBlur(Modal);
