import React from "react";
import PropTypes from "prop-types";
import { Linking } from "react-native";
import { withRouter } from "react-router";

const NavigationNativeRoute = WrappedComponent => {
  class _NavigationNativeRoute extends React.Component {
    constructor(props) {
      super(props);

      this.handleLink = this.handleLink.bind(this);
    }

    componentDidMount() {
      Linking.getInitialURL()
        .then(url => {
          if (url) this.handleLink({ url });
        })
        .catch(err => console.error("An error occurred", err));
      Linking.addEventListener("url", this.handleLink);
    }

    handleLink({ url }) {
      const parts = url.split("/");
      let redirectLink = "";
      for (let i = 3; parts.length > i; i += 1) redirectLink += `/${parts[i]}`;
      const {
        history: { push }
      } = this.props;
      push(redirectLink);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  _NavigationNativeRoute.propTypes = {
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
  };

  return withRouter(_NavigationNativeRoute);
};

export default NavigationNativeRoute;
