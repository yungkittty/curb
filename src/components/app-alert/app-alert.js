import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import AlertContainer from "./components/alert-container";
import AlertMessage from "./components/alert-message";
import AlertText from "./components/alert-text";

class AppAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const { appAlertList, appAlertPopAlert } = this.props;
    if (appAlertList.length > prevProps.appAlertList.length) {
      setTimeout(() => appAlertPopAlert(), 10000);
    }
  }

  render() {
    const { appAlertList } = this.props;

    return appAlertList.length > 0 ? (
      <AlertContainer>
        {_.map(appAlertList, ({ type, message }, index) => (
          <AlertMessage key={index} type={type}>
            <AlertText>{message}</AlertText>
          </AlertMessage>
        ))}
      </AlertContainer>
    ) : null;
  }
}

AppAlert.propTypes = {
  appAlertList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["success", "error", "info"]),
      message: PropTypes.string.isRequired
    })
  ).isRequired,
  appAlertPopAlert: PropTypes.func.isRequired
};

export default AppAlert;
