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
    this.state = { isShowed: false };
  }

  componentDidUpdate(prevProps) {
    const { isAppModalShowed } = this.props;
    if (isAppModalShowed && prevProps.isAppModalShowed !== isAppModalShowed) {
      this.setState({ isShowed: true }); // eslint-disable-line
    }
  }

  appModalTransitionEnd() {
    const { isAppModalShowed } = this.props;
    if (!isAppModalShowed) {
      this.setState({ isShowed: false });
    }
  }

  render() {
    const {
      // eslint-disable-line
      isShowed
    } = this.state;
    const {
      // eslint-disable-line
      isAppModalShowed,
      areAppModalButtonsDisabled,
      appModalHeaderText,
      appModalHeaderCurrentStep,
      appModalHeaderSteps,
      appModalHeaderLeftButtons,
      appModalHeaderRightButtons,
      appModalHeaderBackButton,
      appModalScene,
      appModalSceneDirection,
      appModalSceneData,
      appModalFooterText,
      appModalFooterOnClick,
      appModalHide
    } = this.props;
    return isShowed ? (
      <ModalOverlay
        isAppModalShowed={isAppModalShowed}
        isAppModalButtonsEnabled={isAppModalButtonsEnabled}
        appModalTransitionEnd={this.appModalTransitionEnd}
        appModalFooterOnClick={isAppModalButtonsEnabled ? appModalFooterOnClick : undefined}
        appModalHide={appModalHide}
      >
        <ModalContainer isAppModalShowed={isAppModalShowed}>
          <ModalHeader
            areAppModalButtonsDisabled={areAppModalButtonsDisabled}
            appModalHeaderText={appModalHeaderText}
            appModalHeaderCurrentStep={appModalHeaderCurrentStep}
            appModalHeaderSteps={appModalHeaderSteps}
            appModalHeaderLeftButtons={appModalHeaderLeftButtons}
            appModalHeaderRightButtons={appModalHeaderRightButtons}
            appModalHeaderBackButton={appModalHeaderBackButton}
            hideAppModal={hideAppModal}
          />
          <ModalScene
            scene={appModalScene}
            sceneDirection={appModalSceneDirection}
            sceneData={appModalSceneData}
          />
          {appModalFooterText ? (
            <ModalFooter
              areAppModalButtonsDisabled={areAppModalButtonsDisabled}
              appModalFooterText={appModalFooterText}
              appModalFooterOnClick={appModalFooterOnClick}
            />
          ) : null}
        </ModalContainer>
      </ModalOverlay>
    ) : null;
  }
}

AppModal.defaultProps = {
  appModalScene: null,
  appModalFooterOnClick: null
};

AppModal.propTypes = {
  isAppModalShowed: PropTypes.bool.isRequired,
  areAppModalButtonsDisabled: PropTypes.bool.isRequired,
  appModalHeaderText: PropTypes.string.isRequired,
  appModalHeaderCurrentStep: PropTypes.number.isRequired,
  appModalHeaderSteps: PropTypes.number.isRequired,
  appModalHeaderLeftButtons: PropTypes.array.isRequired, // eslint-disable-line
  appModalHeaderRightButtons: PropTypes.array.isRequired, // eslint-disable-line
  appModalHeaderBackButton: PropTypes.object.isRequired, // eslint-disable-line
  appModalScene: PropTypes.func,
  appModalSceneDirection: PropTypes.number.isRequired,
  appModalSceneData: PropTypes.object.isRequired, // eslint-disable-line
  appModalFooterText: PropTypes.string.isRequired,
  appModalFooterOnClick: PropTypes.func,
  appModalHide: PropTypes.func.isRequired
};

export default AppModal;
