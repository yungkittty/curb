import React from "react";

const NavigationNativeRoute = WrappedComponent => {
  const _NavigationNativeRoute = props => <WrappedComponent {...props} />;

  return _NavigationNativeRoute;
};

export default NavigationNativeRoute;
