import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Discovery from "./discovery";
import { discoveryActions, discoverySelectors } from "../../datas/discovery";

class DiscoveryContainer extends React.Component {
  componentDidMount() {
    const { getDiscovery } = this.props;
    getDiscovery({});
  }

  render() {
    return <Discovery {...this.props} />;
  }
}

const mapStateToProps = state => ({
  discoveryGroups: discoverySelectors.getDiscoveryGroups(state)
});

const mapDispatchToProps = dispatch => ({
  getDiscovery: payload =>
    dispatch(discoveryActions.getDiscoveryRequest(payload))
});

DiscoveryContainer.propTypes = { getDiscovery: PropTypes.func.isRequired };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryContainer);
