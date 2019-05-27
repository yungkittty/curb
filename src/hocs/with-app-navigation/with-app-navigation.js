import { connect } from "react-redux";
import { appNavigationActions, appNavigationSelectors } from "../../datas/app-navigation";

const withAppNavigation = WrappedComponent => {
  const mapStateToProps = state => ({
    isAppNavigationShowed: appNavigationSelectors.isAppNavigationShowed(state)
  });

  const mapDispatchToProps = dispatch => ({
    showAppNavigation: () => dispatch(appNavigationActions.showAppNavigation()),
    hideAppNavigation: () => dispatch(appNavigationActions.hideAppNavigation())
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default withAppNavigation;
