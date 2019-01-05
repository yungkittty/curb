import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import General from "../../";

class Logout extends Component {
  constructor(props) {
    super(props);
    const { setTitle, setLeftClick, setLeftIcon, setComponent } = this.props;

    setTitle("Logout");
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(General, -1));
  }

  render() {
    return "Logout scene";
  }
}

Logout.defaultProps = {
  setTitle: undefined
};

Logout.propTypes = {
  setTitle: PropTypes.func
};

export default Logout;
