import _ from "lodash";
import React, { Component } from "react";
import PropTypes from "prop-types";
import AlertMessage from "./components/alert-message";

class AppAlert extends Component {
  constructor(props) {
    super(props);

    this.state = { firstIndex: 0 };
  }

  componentDidUpdate(prevProps) {
    const {
      appAlertList: { length },
      appAlertClearAlert
    } = this.props;
    if (length > prevProps.appAlertList.length) {
      setTimeout(() => {
        const { appAlertList: actualAppAlertList } = this.props;
        if (actualAppAlertList.length === length) {
          appAlertClearAlert();
          this.setState({ firstIndex: 0 });
        } else this.setState({ firstIndex: length });
      }, 4000);
    }
  }

  render() {
    const { firstIndex } = this.state;
    const { appAlertList } = this.props;

    return appAlertList.length > 0
      ? _.map(appAlertList, ({ type, message }, index) => (
          // eslint-disable-next-line
          <AlertMessage key={index} index={index - firstIndex} type={type} message={message} />
        ))
      : null;
  }
}

AppAlert.propTypes = {
  appAlertList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["success", "error", "info"]),
      message: PropTypes.string.isRequired
    })
  ).isRequired,
  appAlertClearAlert: PropTypes.func.isRequired
};

export default AppAlert;
