import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Discovery from "./discovery";
import { discoveryActions, discoverySelectors } from "../../datas/discovery";
import { appModalActions } from "../../datas/app-modal";
import currentUserSelectors from "../../datas/current-user/current-user-selectors";

class DiscoveryContainer extends React.Component {
  componentDidMount() {
    const { getDiscovery } = this.props;
    getDiscovery({ count: 25 });
  }

  render() {
    const { getDiscovery, ...others } = this.props;
    return <Discovery {...others} />;
  }
}

const mapStateToProps = state => ({
  /* eslint-disable-next-line */
  discoveryGroupsIds: discoverySelectors.getDiscoveryGroupsIds(state) || [],
  currentUserId: currentUserSelectors.getCurrentUserId(state)
});

const mapDispatchToProps = dispatch => ({
  getDiscovery: payload =>
    dispatch(discoveryActions.getDiscoveryRequest(payload)),
  showAppModal: payload => dispatch(appModalActions.showAppModal(payload))
});

DiscoveryContainer.propTypes = { getDiscovery: PropTypes.func.isRequired };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryContainer);
