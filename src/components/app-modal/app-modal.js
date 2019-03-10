import React from "react";
import PropTypes from "prop-types";
import AppModalOverlay from "./components/app-modal-overlay";
import AppModalContainer from "./components/app-modal-container";
import AppModalHeader from "./components/app-modal-header";
import AppModalScene from "./components/app-modal-scene";
import AppModalButtonText from "./components/app-modal-button-text";

const AppModal = ({
  isAppModalShowed,
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
}) =>
  isAppModalShowed ? (
    <AppModalOverlay>
      <AppModalContainer>
        <AppModalHeader
          text={appModalHeaderText}
          currentStep={appModalHeaderCurrentStep}
          steps={appModalHeaderSteps}
          leftIcon={appModalHeaderLeftIcon}
          leftOnClick={appModalHeaderLeftOnClick}
          rightIcon={appModalHeaderRightIcon}
          rightOnClick={appModalHeaderRightOnClick}
        />
        <AppModalScene
          scene={appModalScene}
          sceneDirection={appModalSceneDirection}
          sceneData={appModalSceneData}
        />
        {appModalFooterText ? (
          <AppModalButtonText
            type="h4"
            text={appModalFooterText}
            onClick={appModalFooterOnClick}
          />
        ) : null}
      </AppModalContainer>
    </AppModalOverlay>
  ) : null;

AppModal.propTypes = {
  isAppModalShowed: PropTypes.bool.isRequired,
  appModalHeaderText: PropTypes.string.isRequired,
  appModalHeaderCurrentStep: PropTypes.number.isRequired,
  appModalHeaderSteps: PropTypes.number.isRequired,
  appModalHeaderLeftIcon: PropTypes.string.isRequired,
  appModalHeaderLeftOnClick: PropTypes.func.isRequired,
  appModalHeaderRightIcon: PropTypes.string.isRequired,
  appModalHeaderRightOnClick: PropTypes.func.isRequired,
  appModalScene: PropTypes.func.isRequired,
  appModalSceneDirection: PropTypes.number.isRequired,
  // eslint-disable-next-line
  appModalSceneData: PropTypes.object.isRequired,
  appModalFooterText: PropTypes.string.isRequired,
  appModalFooterOnClick: PropTypes.func.isRequired
};

export default AppModal;
