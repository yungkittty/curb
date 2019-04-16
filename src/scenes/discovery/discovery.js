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
import ButtonIconFloat from "../../components/button-icon-float";
import SignIn from "../sign-in";
import CreateGroup from "../create-group";

const Discovery = ({ t, discoveryGroupsIds, currentUserId, showAppModal }) => (
  <React.Fragment>
    <DiscoveryContainer
      /* eslint-disable-next-line */
      sections={[{ data: [{}] }]}
      keyExtractor={(_, sectionIndex) => sectionIndex}
      ListHeaderComponent={() => (
        <DiscoveryHeader>
          <DiscoveryTitle type="h1" weight={700}>
            {t("title")}
          </DiscoveryTitle>
          <DiscoverySubtitle type="h4">
            {/* eslint-disable-line */}
            {t("subtitle")}
          </DiscoverySubtitle>
        </DiscoveryHeader>
      )}
      renderSectionHeader={() => (
        /* eslint-disable-next-line */
        <DiscoveryListSectionHeader type="h3" weight={500}>
          {t("section")}
        </DiscoveryListSectionHeader>
      )}
      renderItem={() => (
        <DiscoveryList
          data={discoveryGroupsIds}
          keyExtractor={discoveryGroupId => discoveryGroupId}
          renderItem={({ item: discoveryGroupId }) => (
            <DiscoveryListItem discoveryGroupId={discoveryGroupId} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      )}
    />
    <ButtonIconFloat
      icon="plus"
      onClick={() => showAppModal({ scene: currentUserId ? CreateGroup : SignIn })}
    />
  </React.Fragment>
);

Discovery.propTypes = {
  t: PropTypes.func.isRequired,
  discoveryGroupsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentUserId: PropTypes.string.isRequired,
  showAppModal: PropTypes.func.isRequired
};

export default withTranslation("discovery")(Discovery);
