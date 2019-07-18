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
    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderListSectionHeader = this.renderListSectionHeader.bind(this);
    this.renderListSectionItem = this.renderListSectionItem.bind(this);
    this.renderListItem = this.renderListItem.bind(this);
  }

  // eslint-disable-next-line
  getSection(
    // eslint-disable-line
    discSectionTitle,
    discSectionGroupsId,
    getDiscSectionGroups,
    isShowed = true
  ) {
    return isShowed ? [{
      title: discSectionTitle,
      data: [{ groupsId: discSectionGroupsId }],
      getGroups: getDiscSectionGroups
    }] : [];
  }

  getSections() {
    const {
      currentUserId,
      discGlobalSectionGrpsId,
      discCustomSectionGrpsId,
      discRandomSectionGrpsId,
      getDiscGlobalSectionGrps,
      getDiscCustomSectionGrps,
      getDiscRandomSectionGrps
    } = this.props;
    return [
      ...this.getSection(
        // eslint-disable-line
        "global",
        discGlobalSectionGrpsId,
        getDiscGlobalSectionGrps
      ),
      ...this.getSection(
        // eslint-disable-line
        "custom",
        discCustomSectionGrpsId,
        getDiscCustomSectionGrps,
        !!currentUserId
      ),
      ...this.getSection(
        // eslint-disable-line
        "random",
        discRandomSectionGrpsId,
        getDiscRandomSectionGrps
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
    const { groupsId: discoveryGroupsId } = discoveryItemData;
    const { getGroups: getDiscoveryGroups } = discoverySectionData;
    return (
      <DiscoveryList
        data={discoveryGroupsId}
        keyExtractor={(discoveryGroupId, discoveryItemIndex) =>
          // eslint-disable-line
          `${discoveryGroupId}${discoveryItemIndex}`}
        getDiscoveryGroups={getDiscoveryGroups}
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
        groupId={discoveryItemId}
      />
    );
  }

  render() {
    const { showAppModal, currentUserId } = this.props;
    return (
      <React.Fragment>
        <DiscoveryContainer
          sections={this.getSections()}
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
  discGlobalSectionGrpsId: PropTypes.array.isRequired, // eslint-disable-line
  discCustomSectionGrpsId: PropTypes.array.isRequired, // eslint-disable-line
  discRandomSectionGrpsId: PropTypes.array.isRequired, // eslint-disable-line
  getDiscGlobalSectionGrps: PropTypes.func.isRequired,
  getDiscCustomSectionGrps: PropTypes.func.isRequired,
  getDiscRandomSectionGrps: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("discovery")
])(Discovery);
