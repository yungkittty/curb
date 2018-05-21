import React, { Component } from "react";
import {
  NativeRouter as Router
  // Route,
  // Link
} from "react-router-native";

class Routes extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <Router />;
  }
}

export default Routes;
