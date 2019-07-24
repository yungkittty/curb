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

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    const getSectionsResolver = (...sectionArgs) => JSON.stringify(sectionArgs);
    this.getSection = _.memoize(this.getSection.bind(this), getSectionsResolver);
    this.getSections = _.memoize(this.getSections.bind(this), getSectionsResolver);
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderListSectionHeader = this.renderListSectionHeader.bind(this);
    this.renderListSectionItem = this.renderListSectionItem.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  // eslint-disable-next-line
  getSection(
    // eslint-disable-line
    isDiscoverySectionEnd,
    discoverySectionTitle,
    discoverySectionGroupsId,
    getDiscoverySectionGroupsId,
    isShowed = true
  ) {
    return isShowed ? [{
      isDiscoverySectionEnd,
      discoverySectionTitle,
      data: [{ key: discoverySectionTitle, discoverySectionGroupsId }],
      getDiscoverySectionGroupsId
    }] : [];
  }

  getSections(
    // eslint-disable-line
    currentUserId,
    isDiscoveryGlobalSectionEnd,
    isDiscoveryCustomSectionEnd,
    isDiscoveryRandomSectionEnd,
    discoveryGlobalSectionGroupsId,
    discoveryCustomSectionGroupsId,
    discoveryRandomSectionGroupsId,
    getDiscoveryGlobalSectionGroupsId,
    getDiscoveryCustomSectionGroupsId,
    getDiscoveryRandomSectionGroupsId
  ) {
    return [
      ...this.getSection(
        // eslint-disable-line
        isDiscoveryGlobalSectionEnd,
        "global",
        discoveryGlobalSectionGroupsId,
        getDiscoveryGlobalSectionGroupsId
      ),
      ...this.getSection(
        // eslint-disable-line
        isDiscoveryCustomSectionEnd,
        "custom",
        discoveryCustomSectionGroupsId,
        getDiscoveryCustomSectionGroupsId,
        !!currentUserId
      ),
      ...this.getSection(
        // eslint-disable-line
        isDiscoveryRandomSectionEnd,
        "random",
        discoveryRandomSectionGroupsId,
        getDiscoveryRandomSectionGroupsId
      )
    ];
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
        {t(`sections.${discoverySectionData.discoverySectionTitle}`)}
      </DiscoveryListSectionHeader>
    );
  }

  renderListSectionItem({
    // eslint-disable-line
    item: discoveryItemData,
    section: discoverySectionData
  }) {
    const { isDiscoverySectionEnd } = discoverySectionData;
    const { discoverySectionGroupsId } = discoveryItemData;
    const { getDiscoverySectionGroupsId } = discoverySectionData;
    return (
      <DiscoveryList
        isDiscoverySectionEnd={isDiscoverySectionEnd}
        discoverySectionGroupsId={discoverySectionGroupsId}
        getDiscoverySectionGroupsId={getDiscoverySectionGroupsId}
        keyExtractor={(discoveryGroupId, discoveryItemIndex) =>
          // eslint-disable-line
          `${discoveryGroupId}${discoveryItemIndex}`}
        renderItem={this.renderListItem}
      />
    );
  }

  // eslint-disable-next-line
  renderListItem({ item: discoveryItemId }) {
    return (
      // eslint-disable-line
      <DiscoveryListItem
        // eslint-disable-line
        shouldFetch={false}
        groupId={discoveryItemId}
      />
    );
  }

  render() {
    const {
      showAppModal,
      currentUserId,
      isDiscoveryGlobalSectionEnd,
      isDiscoveryCustomSectionEnd,
      isDiscoveryRandomSectionEnd,
      discoveryGlobalSectionGroupsId,
      discoveryCustomSectionGroupsId,
      discoveryRandomSectionGroupsId,
      getDiscoveryGlobalSectionGroupsId,
      getDiscoveryCustomSectionGroupsId,
      getDiscoveryRandomSectionGroupsId
    } = this.props;
    const getSectionsArgs = [
      currentUserId,
      isDiscoveryGlobalSectionEnd,
      isDiscoveryCustomSectionEnd,
      isDiscoveryRandomSectionEnd,
      discoveryGlobalSectionGroupsId,
      discoveryCustomSectionGroupsId,
      discoveryRandomSectionGroupsId,
      getDiscoveryGlobalSectionGroupsId,
      getDiscoveryCustomSectionGroupsId,
      getDiscoveryRandomSectionGroupsId
    ];
    return (
      <React.Fragment>
        <DiscoveryContainer
          sections={this.getSections(...getSectionsArgs)}
          ListHeaderComponent={this.renderListHeader}
          renderSectionHeader={this.renderListSectionHeader}
          renderItem={this.renderListSectionItem}
        />
        <ButtonFloat
          icon="plus"
          onClick={() => showAppModal({ scene: currentUserId ? GroupCreate : SignIn })}
        />
      </React.Fragment>
    );
  }
}

Discovery.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  isDiscoveryGlobalSectionEnd: PropTypes.bool.isRequired,
  isDiscoveryCustomSectionEnd: PropTypes.bool.isRequired,
  isDiscoveryRandomSectionEnd: PropTypes.bool.isRequired,
  discoveryGlobalSectionGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  discoveryCustomSectionGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  discoveryRandomSectionGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  getDiscoveryGlobalSectionGroupsId: PropTypes.func.isRequired,
  getDiscoveryCustomSectionGroupsId: PropTypes.func.isRequired,
  getDiscoveryRandomSectionGroupsId: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("discovery")
])(Discovery);
