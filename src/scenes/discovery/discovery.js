import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import ListSection from "../../components/list-section";
import DiscoveryHeader from "./components/discovery-header";
import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
import DiscoveryList from "./components/discovery-list";
import DiscoveryListItem from "./components/discovery-list-item";
import ButtonFloat from "../../components/button-float";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";

/* eslint-disable */

import GroupCreate from "../group/scenes/group-create";

/* eslint-enable */

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.getSection = this.getSection.bind(this);
    this.getSections = this.getSections.bind(this);
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderListSectionHeader = this.renderListSectionHeader.bind(this);
    this.renderListSectionItem = this.renderListSectionItem.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  // eslint-disable-next-line
  getSection(
    isDiscoverySectionEnd,
    discoverySectionTitle,
    discoverySectionGroupsId,
    getDiscoverySectionGroupsId,
    isShowed = true
  ) {
    return isShowed
      ? [
          {
            isDiscoverySectionEnd,
            discoverySectionTitle,
            data: [{ key: discoverySectionTitle, discoverySectionGroupsId }],
            getDiscoverySectionGroupsId
          }
        ]
      : [];
  }

  getSections() {
    const {
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
    } = this.props;
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
      <DiscoveryHeader
        // eslint-disable-line
        t={t}
      />
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
    const { discoverySectionGroupsId } = discoveryItemData;
    const { isDiscoverySectionEnd, getDiscoverySectionGroupsId } = discoverySectionData;
    return (
      <DiscoveryList
        isDiscoverySectionEnd={isDiscoverySectionEnd}
        discoverySectionGroupsId={discoverySectionGroupsId}
        getDiscoverySectionGroupsId={getDiscoverySectionGroupsId}
        keyExtractor={discoverySectionGroupId => discoverySectionGroupId}
        renderItem={this.renderListItem}
      />
    );
  }

  // eslint-disable-next-line
  renderListItem({ item: discoveryItemId }) {
    return (
      <DiscoveryListItem
        // eslint-disable-line
        shouldFetch={false}
        groupId={discoveryItemId}
        size="small"
      />
    );
  }

  render() {
    const { showAppModal, currentUserId } = this.props;
    return (
      <React.Fragment>
        <ListSection
          sections={this.getSections()}
          ListHeaderComponent={this.renderListHeader}
          renderSectionHeader={this.renderListSectionHeader}
          renderItem={this.renderListSectionItem}
        />
        {currentUserId ? (
          <ButtonFloat
            // eslint-disable-line
            icon="plus"
            onClick={() => showAppModal({ scene: GroupCreate })}
          />
        ) : null}
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
