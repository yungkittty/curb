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
import CreateGroup from "../create-group";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";

const Discovery = ({
  // eslint-disable-line
  showAppModal,
  currentUserId,
  discoveryGroupsId,
  t
}) => (
  <React.Fragment>
    <DiscoveryContainer
      /* eslint-disable-next-line */
      sections={[{ data: [{}] }]}
      keyExtractor={(sectionData, sectionIndex) => sectionIndex}
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
          data={discoveryGroupsId}
          keyExtractor={discoveryGroupId => discoveryGroupId}
          renderItem={({ item: discoveryGroupId }) => (
            // eslint-disable-line
            <DiscoveryListItem groupId={discoveryGroupId} />
          )}
        />
      )}
    />
    <ButtonFloat
      icon="plus"
      onClick={() =>
        showAppModal({
          scene: currentUserId ? CreateGroup : SignIn
        })
      }
    />
  </React.Fragment>
);

Discovery.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  discoveryGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  t: PropTypes.func.isRequired
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTranslation("discovery")
])(Discovery);
