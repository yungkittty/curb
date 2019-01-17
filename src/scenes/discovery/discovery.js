import React from "react";
import PropTypes from "prop-types";
import ContainerScroll from "../../components/container-scroll";
import DiscoveryHeader from "./components/discovery-header";
import ListSection from "../../components/list-section";
import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
import DiscoveryList from "./components/discovery-list";
import DiscoveryListItem from "./components/discovery-list-item";
import ButtonIconFloat from "../../components/button-icon-float";

const Discovery = ({ discoveryGroups, getDiscovery }) => (
  <React.Fragment>
    <ContainerScroll>
      <DiscoveryHeader />
      <ListSection
        /* eslint-disable-next-line */
        sections={[{ data: [{}] }]}
        renderSectionHeader={() => (
          /* eslint-disable-next-line */
          <DiscoveryListSectionHeader type="h3">
            All groups
          </DiscoveryListSectionHeader>
        )}
        renderItem={() => (
          <DiscoveryList
            data={discoveryGroups}
            renderItem={({ item: discoveryGroup }) => (
              <DiscoveryListItem discoveryGroup={discoveryGroup} />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            getDiscovery={getDiscovery}
          />
        )}
      />
    </ContainerScroll>
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

Discovery.propTypes = {
  discoveryGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  getDiscovery: PropTypes.func.isRequired
};

export default Discovery;
