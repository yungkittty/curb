import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Switch from "./components/switch";

// https://reacttraining.com/react-router/web/example/modal-gallery

class ModalSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = { prevLocation: undefined };
  }

  static getDerivedStateFromProps(nextProps) {
    const {
      location,
      location: { state: { isModal = false } = {} }
    } = nextProps;
    return !isModal ? { prevLocation: location } : null;
  }

  render() {
    const {
      props: {
        location,
        location: { state: { isModal = false } = {} },
        children
      },
      state: { prevLocation }
    } = this;
    return (
      <Switch location={!isModal ? location : prevLocation}>{children}</Switch>
    );
  }
}

ModalSwitch.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(ModalSwitch);
