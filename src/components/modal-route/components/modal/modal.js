import React, { Component, createElement } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalContent from "./components/modal-content";
import ModalButton from "./components/modal-button";
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
      leftTo: undefined,
      leftClick: undefined,
      rightIcon: "times",
      rightTo: undefined,
      rightClick: goBack,
      buttonTitle: undefined,
      buttonTo: undefined,
      buttonClick: undefined
    };

    this.setTitle = this.setTitle.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.setLeftIcon = this.setLeftIcon.bind(this);
    this.setLeftTo = this.setLeftTo.bind(this);
    this.setLeftClick = this.setLeftClick.bind(this);
    this.setRightIcon = this.setRightIcon.bind(this);
    this.setRightTo = this.setRightTo.bind(this);
    this.setRightCick = this.setRightCick.bind(this);
    this.setButtonTitle = this.setButtonTitle.bind(this);
    this.setButtonTo = this.setButtonTo.bind(this);
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

  setLeftTo(leftTo) {
    this.setState({ leftTo });
  }

  setLeftClick(leftClick) {
    this.setState({ leftClick });
  }

  setRightIcon(rightIcon) {
    this.setState({ rightIcon });
  }

  setRightTo(rightTo) {
    this.setState({ rightTo });
  }

  setRightCick(rightClick) {
    this.setState({ rightClick });
  }

  setButtonTitle(buttonTitle) {
    this.setState({ buttonTitle });
  }

  setButtonTo(buttonTo) {
    this.setState({ buttonTo });
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
      setButtonTo,
      setButtonClick
    } = this;

    const { component, render, ...others } = this.props;

    const {
      title,
      progress,
      leftIcon,
      leftTo,
      leftClick,
      rightIcon,
      rightTo,
      rightClick,
      buttonTitle,
      buttonTo,
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
      setButtonTo,
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
            leftTo={leftTo}
            leftClick={leftClick}
            rightIcon={rightIcon}
            rightTo={rightTo}
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
          {buttonTitle && (
            <ModalButton
              title={buttonTitle}
              to={buttonTo}
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
