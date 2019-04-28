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
    const { appAlertList, appAlertClearAlert } = this.props;
    const l = appAlertList.length;

    if (l > prevProps.appAlertList.length)
      setTimeout(() => {
        const { appAlertList: actualAppAlertList } = this.props;
        if (actualAppAlertList.length === l) {
          appAlertClearAlert();
          this.setState({ firstIndex: 0 });
        } else {
          this.setState({ firstIndex: l });
        }
      }, 4000);
  }

  render() {
    const { firstIndex } = this.state;
    const { appAlertList } = this.props;
    return _.map(appAlertList, (props, index) => (
      <AlertMessage key={index} index={index - firstIndex} {...props} />
    ));
  }
}

AppAlert.propTypes = {
  appAlertList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
      message: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  ).isRequired,
  appAlertClearAlert: PropTypes.func.isRequired
};

export default AppAlert;
