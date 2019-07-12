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
    const paths = ["/users", "/groups"];
    const {
      history: { push }
    } = this.props;
    const link = url.replace("https://curb-app.com", "");
    for (let i = 0; i < paths.length; i += 1) if (link.startsWith(paths[i])) push(link);
  }

  render() {
    return null;
  }
}

AppDeep.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default withRouter(AppDeep);
