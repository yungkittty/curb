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
    const sectionResolver = (...sectionArgs) => JSON.stringify(sectionArgs);
    this.getSection = _.memoize(this.getSection.bind(this), sectionResolver);
    this.getSections = _.memoize(this.getSections.bind(this), sectionResolver);
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderListSectionHeader = this.renderListSectionHeader.bind(this);
    this.renderListSectionItem = this.renderListSectionItem.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  // eslint-disable-next-line
  getSection(
    // eslint-disable-line
    discoverySectionTitle,
    discoverySectionGroupsId,
    getDiscoverySectionGroupsId,
    isShowed = true
  ) {
    return isShowed ? [{
      title: discoverySectionTitle,
      data: [{ groupsId: discoverySectionGroupsId }],
      getGroupsId: getDiscoverySectionGroupsId
    }] : [];
  }

  getSections(
    // eslint-disable-line
    currentUserId,
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
        "global",
        discoveryGlobalSectionGroupsId,
        getDiscoveryGlobalSectionGroupsId
      ),
      ...this.getSection(
        // eslint-disable-line
        "custom",
        discoveryCustomSectionGroupsId,
        getDiscoveryCustomSectionGroupsId,
        !!currentUserId
      ),
      ...this.getSection(
        // eslint-disable-line
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
        {t(`sections.${discoverySectionData.title}`)}
      </DiscoveryListSectionHeader>
    );
  }

  renderListSectionItem({
    // eslint-disable-line
    item: discoveryItemData,
    section: discoverySectionData
  }) {
    const { groupsId } = discoveryItemData;
    const { getGroupsId } = discoverySectionData;
    return (
      <DiscoveryList
        groupsId={groupsId}
        getGroupsId={getGroupsId}
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
      discoveryGlobalSectionGroupsId,
      discoveryCustomSectionGroupsId,
      discoveryRandomSectionGroupsId,
      getDiscoveryGlobalSectionGroupsId,
      getDiscoveryCustomSectionGroupsId,
      getDiscoveryRandomSectionGroupsId
    } = this.props;
    const getSectionsArgs = [
      currentUserId,
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
          keyExtractor={(sectionData, sectionIndex) => sectionIndex}
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
