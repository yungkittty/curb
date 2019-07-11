import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Linking } from "react-native";
import { withRouter } from "react-router";

const AppDeep = WrappedComponent => {
  class _AppDeep extends React.Component {
    constructor(props) {
      super(props);

      this.handleLink = this.handleLink.bind(this);
    }

    componentDidMount() {
      Linking.getInitialURL().then(url => {
        if (url) this.handleLink({ url });
      });
      Linking.addEventListener("url", this.handleLink);
    }

    handleLink({ url }) {
      const redirectLink = _.trimStart(url, "https://curb-app.com");
      const {
        history: { push }
      } = this.props;
      push(redirectLink);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  _AppDeep.propTypes = {
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
  };

  return withRouter(_AppDeep);
};

export default AppDeep;
