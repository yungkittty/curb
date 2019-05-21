import React from "react";
import SplashScreen from "react-native-splash-screen";

const AppSplash = WrappedComponent =>
  class extends React.Component {
    componentDidMount() {
      setTimeout(() => SplashScreen.hide(), 500);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default AppSplash;
