import React from "react";
// import PropTypes from "prop-types";
import ContainerScroll from "../../components/container-scroll";
import DiscoveryHeader from "./components/discovery-header";
import ListSection from "../../components/list-section";
// import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
// import DiscoverySection from "./components/discovery-section";
// import DiscoverySectionItem from "./components/discovery-section-item";
import ButtonIconFloat from "../../components/button-icon-float";

const Discovery = (/* { discoveryGroups } */) => (
  <React.Fragment>
    <ContainerScroll>
      <DiscoveryHeader />
      <ListSection
        sections={[{ data: [{}] }]} // !
        renderSection={() => <React.Fragment />}
        renderItem={() => <React.Fragment />}
      />
    </ContainerScroll>
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

Discovery.propTypes = {
  // discoveryGroups: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Discovery;
