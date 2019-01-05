import React, { Component } from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";
/* eslint-disable-next-line */
import Settings from "../../";

class General extends Component {
  constructor(props) {
    super(props);
    const { setTitle, setLeftClick, setLeftIcon, setComponent } = this.props;

    setTitle("General");
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(Settings, -1));
  }

  render() {
    return <ContentContainer>General scene</ContentContainer>;
  }
}

General.defaultProps = {
  setTitle: undefined
};

General.propTypes = {
  setTitle: PropTypes.func
};

export default General;
