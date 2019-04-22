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
    const { firstIndex } = this.state;
    const l = appAlertList.length;

    for (let i = 0; i < l; i += 1) {
      const keyIndex = _.findIndex(appAlertList, { persistUntilKey: appAlertList[i].key });
      if (appAlertList[i].key && keyIndex + 1 !== firstIndex)
        setTimeout(() => {
          this.setState({
            firstIndex: keyIndex + 1
          });
          console.log("first index top : " + (keyIndex + 1));
        }, 500);
    }
    if (l > prevProps.appAlertList.length && !appAlertList[l - 1].persistUntilKey)
      setTimeout(() => {
        const { appAlertList: actualAppAlertList } = this.props;
        if (actualAppAlertList.length === l) {
          appAlertClearAlert();
          this.setState({ firstIndex: 0 });
        } else {
          console.log("first index bot : " + l);
          this.setState({ firstIndex: l });
        }
      }, 4000);
  }

  render() {
    const { firstIndex } = this.state;
    const { appAlertList } = this.props;

    return appAlertList.length > 0
      ? _.map(appAlertList, ({ type, message, icon, persistUntilKey }, index) => (
          // eslint-disable-next-line
          <AlertMessage
            key={index}
            index={index - firstIndex}
            persist={persistUntilKey && !_.find(appAlertList, { key: persistUntilKey }, index)}
            type={type}
            icon={icon || (persistUntilKey && "loader")}
            message={message}
          />
        ))
      : null;
  }
}

AppAlert.propTypes = {
  appAlertList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["success", "error", "info"]).isRequired,
      message: PropTypes.string.isRequired,
      persistUntilKey: PropTypes.string,
      key: PropTypes.string
    })
  ).isRequired,
  appAlertClearAlert: PropTypes.func.isRequired
};

export default AppAlert;
