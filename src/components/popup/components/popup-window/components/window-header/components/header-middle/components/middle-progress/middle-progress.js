import React, { Component } from "react";
import PropTypes from "prop-types";
import ProgressContainer from "./components/progress-container";
import ProgressDot from "./components/progress-dot";

class MiddleProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 1,
      total: 3
    };
  }

  add() {}

  render() {
    const { progress, total } = this.state;
    let dots = [];
    for (let i = 0; i < total; i++) {
      dots.push(<ProgressDot enabled={i < progress ? false : true} />);
    }
    return <ProgressContainer>{dots}</ProgressContainer>;
  }
}

MiddleProgress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default MiddleProgress;
