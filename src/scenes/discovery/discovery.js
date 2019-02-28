import React from "react";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import DiscoveryHeader from "./components/discovery-header";
import DiscoveryTitle from "./components/discovery-title";
import DiscoverySubtitle from "./components/discovery-subtitle";
import ListSection from "../../components/list-section";
import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
import DiscoveryList from "./components/discovery-list";
import DiscoveryListItem from "./components/discovery-list-item";
import ButtonIconFloat from "../../components/button-icon-float";

const Discovery = ({ t, discoveryGroupsIds }) => (
  <React.Fragment>
    <ListSection
      /* eslint-disable-next-line */
      sections={[{ data: [{}] }]}
      keyExtractor={(_, sectionIndex) => sectionIndex}
      ListHeaderComponent={() => (
        <DiscoveryHeader>
          <DiscoveryTitle type="h1">
            {t("title")}
          </DiscoveryTitle>
          <DiscoverySubtitle type="h3">
            {t("subtitle")}
          </DiscoverySubtitle>
        </DiscoveryHeader>
      )}
      renderSectionHeader={() => (
        /* eslint-disable-next-line */
        <DiscoveryListSectionHeader type="h3">
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
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

Discovery.propTypes = {
  t: PropTypes.func.isRequired,
  discoveryGroupsIds: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withNamespaces("discovery")(Discovery);
