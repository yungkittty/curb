import React, { Component } from "react";
import PropTypes from "prop-types";

class ProgressState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      total: 3
    };
  }

  add() {}
}

ProgressState.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default ProgressState;
