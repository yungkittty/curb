const appModalSelectors = {};

appModalSelectors.isAppModalShowed = state => state.appModal.isShowed;

appModalSelectors.isAppModalButtonsEnabled = state => state.appModal.isButtonsEnabled;

appModalSelectors.isAppModalEnterEventEnabled = state => state.appModal.isEnterEventEnabled;

appModalSelectors.getAppModalHeaderText = state => state.appModal.headerText;

appModalSelectors.getAppModalHeaderCurrentStep = state => state.appModal.headerCurrentStep;

appModalSelectors.getAppModalHeaderSteps = state => state.appModal.headerSteps;

appModalSelectors.getAppModalHeaderLeftIcon = state => state.appModal.headerLeftIcon;

appModalSelectors.getAppModalHeaderLeftOnClick = state => state.appModal.headerLeftOnClick;

appModalSelectors.getAppModalHeaderRightIcon = state => state.appModal.headerRightIcon;

appModalSelectors.getAppModalHeaderRightOnClick = state => state.appModal.headerRightOnClick;

appModalSelectors.getAppModalScene = state => state.appModal.scene;

appModalSelectors.getAppModalSceneDirection = state => state.appModal.sceneDirection;

appModalSelectors.getAppModalSceneData = state => state.appModal.sceneData;

appModalSelectors.getAppModalFooterText = state => state.appModal.footerText;

appModalSelectors.getAppModalFooterOnClick = state => state.appModal.footerOnClick;

export default appModalSelectors;
