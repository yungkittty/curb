import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Discovery from "./discovery";
import { discoveryActions, discoverySelectors } from "../../datas/discovery";
import withCurrentUser from "../../hocs/with-current-user";

class DiscoveryContainer extends React.Component {
  componentDidMount() {
    const { getDiscoverySections, currentUserId } = this.props;
    getDiscoverySections({ id: currentUserId });
  }

  render() {
    const { getDiscoverySections, ...others } = this.props;
    return <Discovery {...others} />;
  }
}

const mapStateToProps = state => ({
  discoverySections: discoverySelectors.getDiscoverySections(state) || []
});

const mapDispatchToProps = dispatch => ({
  getDiscoverySections: payload => dispatch(discoveryActions.getDiscoverySectionsRequest(payload))
});

DiscoveryContainer.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  getDiscoverySections: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withCurrentUser,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
])(DiscoveryContainer);
