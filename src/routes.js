import React, { Component } from "react";
import {
  BrowserRouter as Router
  // Route,
  // Link
} from "react-router-dom";

class Routes extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Router />;
  }
}

export default Routes;
