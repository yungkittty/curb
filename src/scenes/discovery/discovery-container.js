import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Discovery from "./discovery";
import { discoveryActions, discoverySelectors } from "../../datas/discovery";
import { appModalActions } from "../../datas/app-modal";
import currentUserSelectors from "../../datas/current-user/current-user-selectors";

class DiscoveryContainer extends React.Component {
  componentDidMount() {
    const {
      getDiscovery,
      location: { search }
    } = this.props;
    if (search) {
      const validateEmail = "?validateEmail=";
      const index = search.lastIndexOf(validateEmail);
      if (index !== -1) {
        const token = search.substring(index + validateEmail.length);
        console.log(token);
      }

      // Call validate email
    }
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
  currentUserId: currentUserSelectors.getCurrentUserId(state) || ""
});

const mapDispatchToProps = dispatch => ({
  getDiscovery: payload => dispatch(discoveryActions.getDiscoveryRequest(payload)),
  showAppModal: payload => dispatch(appModalActions.showAppModal(payload))
});

DiscoveryContainer.propTypes = {
  getDiscovery: PropTypes.func.isRequired,
  location: PropTypes.shape({ search: PropTypes.string.isRequired }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoveryContainer);
