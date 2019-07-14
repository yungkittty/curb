import React from "react";
import PropTypes from "prop-types";
import { Linking } from "react-native";
import { withRouter } from "react-router";

class AppDeep extends React.Component {
  constructor(props) {
    super(props);

    this.handleLinking = this.handleLinking.bind(this);
  }

  componentDidMount() {
    Linking.getInitialURL().then(url => {
      if (url) this.handleLinking({ url });
    });
    Linking.addEventListener("url", this.handleLinking);
  }

  componentWillUnmount() {
    Linking.removeEventListener("url", this.handleLinking);
  }

  handleLinking({ url }) {
    const {
      history: { push }
    } = this.props;
    push(url.replace("https://curb-app.com", ""));
  }

  render() {
    return null;
  }
}

AppDeep.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default withRouter(AppDeep);
