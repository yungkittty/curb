const appAlertSelectors = {};

appAlertSelectors.getAppAlertList = state => state.appAlert.appAlertStatus.list;

export default appAlertSelectors;
