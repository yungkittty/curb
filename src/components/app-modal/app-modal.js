import React from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalScene from "./components/modal-scene";
import ModalFooter from "./components/modal-footer";

const AppModal = ({
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
}) =>
  isAppModalShowed ? (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader
          text={appModalHeaderText}
          currentStep={appModalHeaderCurrentStep}
          steps={appModalHeaderSteps}
          leftIcon={appModalHeaderLeftIcon}
          leftOnClick={isAppModalButtonsEnabled && appModalHeaderLeftOnClick}
          rightIcon={appModalHeaderRightIcon}
          rightOnClick={isAppModalButtonsEnabled && appModalHeaderRightOnClick}
        />
        <ModalScene
          scene={appModalScene}
          sceneDirection={appModalSceneDirection}
          sceneData={appModalSceneData}
        />
        {appModalFooterText ? (
          <ModalFooter weight={500} onClick={isAppModalButtonsEnabled && appModalFooterOnClick}>
            {appModalFooterText}
          </ModalFooter>
        ) : null}
      </ModalContainer>
    </ModalOverlay>
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
