import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Linking } from "react-native";
import { withRouter } from "react-router";

class AppDeep extends React.Component {
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
    console.log(url);
    const redirectLink = url.replace("https://curb-app.com", "");
    console.log(redirectLink);
    const {
      history: { push }
    } = this.props;
    push(redirectLink);
  }

  render() {
    return null;
  }
}

AppDeep.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default withRouter(AppDeep);
