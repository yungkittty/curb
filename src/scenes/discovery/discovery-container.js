/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Discovery from "./discovery";

class DiscoveryContainer extends React.Component {
  componentDidMount() {}

  render() {
    const { ...others } = this.props;
    return <Discovery {...others} />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

DiscoveryContainer.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryContainer);
