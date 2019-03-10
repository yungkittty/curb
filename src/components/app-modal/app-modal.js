import React from "react";
import PropTypes from "prop-types";
import AppModalOverlay from "./components/app-modal-overlay";
import AppModalContainer from "./components/app-modal-container";
import AppModalHeader from "./components/app-modal-header";
import AppModalScene from "./components/app-modal-scene";
import AppModalFooter from "./components/app-modal-footer";

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
          <AppModalFooter
            type="h4"
            text={appModalFooterText}
            onClick={appModalFooterOnClick}
          />
        ) : null}
      </AppModalContainer>
    </AppModalOverlay>
  ) : null;

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
