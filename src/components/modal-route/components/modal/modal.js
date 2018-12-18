import React, { Component } from "react";
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
      leftClick: undefined,
      rightIcon: "times",
      rightClick: () => goBack(),
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
    this.resetModal = this.resetModal.bind(this);

    this.initialState = this.state;
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

  resetModal() {
    this.setState({ ...this.initialState });
  }

  render() {
    const {
      setTitle,
      setProgress,
      setLeftIcon,
      setLeftClick,
      setRightIcon,
      setRightCick,
      setComponent,
      setButtonTitle,
      setButtonClick,
      resetModal
    } = this;

    const { component, ...others } = this.props;

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

    const sceneProps = {
      setTitle,
      setProgress,
      setLeftIcon,
      setLeftClick,
      setRightIcon,
      setRightCick,
      setComponent,
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
          <ModalContent
            component={component}
            resetModal={resetModal}
            sceneProps={sceneProps}
          />
          {buttonTitle && (
            <ModalButton title={buttonTitle} onClick={buttonClick} />
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
  /* eslint-disable-next-line */
  history: PropTypes.object,
  component: PropTypes.func,
  render: PropTypes.func
};

export default ModalBlur(Modal);
