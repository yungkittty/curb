import React, { Component } from "react";
import PropTypes from "prop-types";
import DotContainer from "./components/dot-container";

class ProgressDot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { enabled } = this.props;
    return <DotContainer enabled={enabled} />;
  }
}

ProgressDot.propTypes = {
  enabled: PropTypes.bool.isRequired
};

export default ProgressDot;
