import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import DiscoveryContainer from "./components/discovery-container";
import DiscoveryHeader from "./components/discovery-header";
import DiscoveryTitle from "./components/discovery-title";
import DiscoverySubtitle from "./components/discovery-subtitle";
import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
import DiscoveryList from "./components/discovery-list";
import DiscoveryListItem from "./components/discovery-list-item";
import ButtonFloat from "../../components/button-float";
import SignIn from "../sign-in";
import GroupCreate from "../group/scenes/group-create";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import Loader from "../../components/loader";

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderListSectionHeader = this.renderListSectionHeader.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
    this.renderListSectionItem = this.renderListSectionItem.bind(this);
  }

  renderListHeader() {
    const { t } = this.props;
    return (
      <DiscoveryHeader>
        <DiscoveryTitle type="h1" weight={700}>
          {t("title")}
        </DiscoveryTitle>
        <DiscoverySubtitle type="h4">
          {/* eslint-disable-line */}
          {t("subtitle")}
        </DiscoverySubtitle>
      </DiscoveryHeader>
    );
  }

  renderListSectionHeader({ section: discoverySectionData }) {
    const { t } = this.props;
    return (
      <DiscoveryListSectionHeader type="h3" weight={500}>
        {t(`sections.${discoverySectionData.category}`)}
      </DiscoveryListSectionHeader>
    );
  }

  // eslint-disable-next-line
  renderListItem({ item: discoveryItemId }) {
    return (
      // eslint-disable-line
      <DiscoveryListItem
        // eslint-disable-line
        groupId={discoveryItemId}
      />
    );
  }

  renderListSectionItem({ item: discoveryItemData }) {
    const { groups: discoveryItemsId } = discoveryItemData;
    return (
      <DiscoveryList
        data={discoveryItemsId}
        keyExtractor={(discoveryItemId, discoveryItemIndex) =>
          // eslint-disable-line
          `${discoveryItemId}${discoveryItemIndex}`
        }
        renderItem={this.renderListItem}
      />
    );
  }

  render() {
    const {
      // eslint-disable-line
      showAppModal,
      currentUserId,
      discoverySections
    } = this.props;
    return <Loader />;
  }
}

Discovery.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  discoverySections: PropTypes.array.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("discovery")
])(Discovery);
