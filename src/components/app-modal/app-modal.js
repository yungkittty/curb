import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalScene from "./components/modal-scene";
import ModalFooter from "./components/modal-footer";

class AppModal extends Component {
  constructor(props) {
    super(props);
    this.appModalTransitionEnd = this.appModalTransitionEnd.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { isShowed: false };
  }

  componentDidUpdate(prevProps) {
    const { isAppModalShowed, disableAppModalButtons } = this.props;
    if (prevProps.isAppModalShowed !== isAppModalShowed && isAppModalShowed) {
      disableAppModalButtons();
      this.setState({ isShowed: true }); // eslint-disable-line
    }
  }

  handleKeyDown(event) {
    const { appModalHide } = this.props;
    if (event.keyCode === 27) appModalHide();
  }

  appModalTransitionEnd() {
    const {
      // eslint-disable-line
      isAppModalShowed,
      isAppModalButtonsEnabled,
      enableAppModalButtons
    } = this.props;
    if (isAppModalShowed && !isAppModalButtonsEnabled) {
      enableAppModalButtons();
    } else if (!isAppModalShowed) {
      this.setState({ isShowed: false });
    }
  }

  render() {
    const { isShowed } = this.state;
    const {
      isAppModalShowed,
      isAppModalButtonsEnabled,
      appModalHeaderText,
      appModalHeaderCurrentStep,
      appModalHeaderSteps,
      appModalHeaderLeftIcon,
      appModalHeaderLeftOnClick,
      appModalHeaderRightIcon,
      appModalHeaderRightOnClick,
      appModalScene,
      appModalSceneDirection,
      appModalSceneData,
      appModalFooterText,
      appModalFooterOnClick,
      appModalHide
    } = this.props;
    return isShowed ? (
      <ModalOverlay
        // eslint-disable-line
        isAppModalShowed={isAppModalShowed}
        appModalTransitionEnd={this.appModalTransitionEnd}
        onClick={appModalHide}
        onKeyDown={this.handleKeyDown}
        tabIndex="0"
      >
        <ModalContainer isAppModalShowed={isAppModalShowed} onClick={e => e.stopPropagation()}>
          <ModalHeader
            text={appModalHeaderText}
            currentStep={appModalHeaderCurrentStep}
            steps={appModalHeaderSteps}
            leftIcon={appModalHeaderLeftIcon}
            leftOnClick={isAppModalButtonsEnabled ? appModalHeaderLeftOnClick : undefined}
            rightIcon={appModalHeaderRightIcon}
            rightOnClick={isAppModalButtonsEnabled ? appModalHeaderRightOnClick : undefined}
          />
          <ModalScene
            scene={appModalScene}
            sceneDirection={appModalSceneDirection}
            sceneData={appModalSceneData}
          />
          {appModalFooterText ? (
            <ModalFooter
              // eslint-disable-line
              weight={500}
              onClick={isAppModalButtonsEnabled ? appModalFooterOnClick : undefined}
            >
              {appModalFooterText}
            </ModalFooter>
          ) : null}
        </ModalContainer>
      </ModalOverlay>
    ) : null;
  }
}

AppModal.defaultProps = {
  appModalHeaderText: undefined,
  appModalHeaderCurrentStep: undefined,
  appModalHeaderSteps: undefined,
  appModalHeaderLeftIcon: undefined,
  appModalHeaderLeftOnClick: undefined,
  appModalScene: undefined,
  appModalSceneDirection: undefined,
  appModalSceneData: undefined,
  appModalFooterText: undefined,
  appModalFooterOnClick: undefined
};

AppModal.propTypes = {
  isAppModalShowed: PropTypes.bool.isRequired,
  isAppModalButtonsEnabled: PropTypes.bool.isRequired,
  appModalHeaderText: PropTypes.string,
  appModalHeaderCurrentStep: PropTypes.number,
  appModalHeaderSteps: PropTypes.number,
  appModalHeaderLeftIcon: PropTypes.string,
  appModalHeaderLeftOnClick: PropTypes.func,
  appModalHeaderRightIcon: PropTypes.string.isRequired,
  appModalHeaderRightOnClick: PropTypes.func.isRequired,
  appModalScene: PropTypes.func,
  appModalSceneDirection: PropTypes.number,
  appModalSceneData: PropTypes.object, // eslint-disable-line
  appModalFooterText: PropTypes.string,
  appModalFooterOnClick: PropTypes.func,
  appModalHide: PropTypes.func.isRequired,
  enableAppModalButtons: PropTypes.func.isRequired,
  disableAppModalButtons: PropTypes.func.isRequired
};

export default AppModal;
