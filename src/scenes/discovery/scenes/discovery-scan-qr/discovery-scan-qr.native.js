import React from "react";
import PropTypes from "prop-types";

class DiscoveryScanQr extends React.Component {
  constructor(props) {
    super(props);
    const { setAppModalHeaderText } = props;
    setAppModalHeaderText({ headerText: "QR Code" });
  }

  render() {
    return null;
  }
}

DiscoveryScanQr.propTypes = {
  setAppModalHeaderText: PropTypes.func.isRequired
};

export default DiscoveryScanQr;
