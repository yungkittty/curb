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

    this.state = { isAppModalRender: false };

    this.appModalCloseTransitionEnd = this.appModalCloseTransitionEnd.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { isAppModalShowed } = this.props;
    if (prevProps.isAppModalShowed !== isAppModalShowed) {
      this.setState(isAppModalShowed ? { isAppModalRender: true } : { isAppModalHidding: true }); // eslint-disable-line
    }
  }

  appModalCloseTransitionEnd() {
    this.setState({ isAppModalRender: false });
  }

  render() {
    const { isAppModalRender } = this.state;
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
      appModalFooterOnClick
    } = this.props;
    return isAppModalRender ? (
      <ModalOverlay
        isAppModalShowed={isAppModalShowed}
        appModalCloseTransitionEnd={this.appModalCloseTransitionEnd}
      >
        <ModalContainer isAppModalShowed={isAppModalShowed}>
          <ModalHeader
            text={appModalHeaderText}
            currentStep={appModalHeaderCurrentStep}
            steps={appModalHeaderSteps}
            leftIcon={appModalHeaderLeftIcon}
            leftOnClick={isAppModalButtonsEnabled ? appModalHeaderLeftOnClick : () => undefined}
            rightIcon={appModalHeaderRightIcon}
            rightOnClick={isAppModalButtonsEnabled ? appModalHeaderRightOnClick : () => undefined}
          />
          <ModalScene
            scene={appModalScene}
            sceneDirection={appModalSceneDirection}
            sceneData={appModalSceneData}
          />
          {appModalFooterText ? (
            <ModalFooter
              weight={500}
              text={appModalFooterText}
              onClick={isAppModalButtonsEnabled ? appModalFooterOnClick : () => undefined}
            />
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
  // eslint-disable-next-line
  appModalSceneData: PropTypes.object,
  appModalFooterText: PropTypes.string,
  appModalFooterOnClick: PropTypes.func
};

export default AppModal;
