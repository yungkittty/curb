const appModalSelectors = {};

appModalSelectors.isAppModalShowed = state => state.appModal.isShowed;

appModalSelectors.areAppModalButtonsDisabled = state => state.appModal.areButtonsDisabled;

appModalSelectors.getAppModalHeaderText = state => state.appModal.headerText;

appModalSelectors.getAppModalHeaderCurrentStep = state => state.appModal.headerCurrentStep;

appModalSelectors.getAppModalHeaderSteps = state => state.appModal.headerSteps;

appModalSelectors.getAppModalHeaderLeftButtons = state => state.appModal.headerLeftButtons;

appModalSelectors.getAppModalHeaderRightButtons = state => state.appModal.headerRightButtons;

appModalSelectors.getAppModalHeaderBackButton = state => state.appModal.headerBackButton;

appModalSelectors.getAppModalScene = state => state.appModal.scene;

appModalSelectors.getAppModalSceneDirection = state => state.appModal.sceneDirection;

appModalSelectors.getAppModalSceneData = state => state.appModal.sceneData;

appModalSelectors.getAppModalFooterText = state => state.appModal.footerText;

appModalSelectors.getAppModalFooterOnClick = state => state.appModal.footerOnClick;

export default appModalSelectors;
