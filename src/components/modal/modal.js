import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalBlur from "./components/modal-blur";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalContent from "./components/modal-content";
import ModalButtonText from "./components/modal-button-text";

class Modal extends Component {
  constructor(props) {
    super(props);

    const { onCloseRequest, history: { goBack } = {} } = this.props;

    this.state = {
      title: undefined,
      progress: undefined,
      leftIcon: undefined,
      leftClick: undefined,
      rightIcon: "times",
      rightClick: onCloseRequest || goBack,
      buttonTitle: undefined,
      buttonClick: undefined
    };

    this.modalContentRef = React.createRef();

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
      modalContentRef,
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
            render={render}
            resetModal={resetModal}
            sceneProps={sceneProps}
            ref={modalContentRef}
          />
          {buttonTitle && (
            <ModalButtonText
              type="h4"
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
  onCloseRequest: undefined,
  component: undefined,
  render: undefined
};

Modal.propTypes = {
  onCloseRequest: PropTypes.func,
  history: PropTypes.shape({ goBack: PropTypes.func.isRequired }).isRequired,
  component: PropTypes.func,
  render: PropTypes.func
};

export default ModalBlur(Modal);
