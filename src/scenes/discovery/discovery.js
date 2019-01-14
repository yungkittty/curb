import _ from "lodash";
import React from "react";
import ContainerScroll from "../../components/container-scroll";
import DiscoveryHeader from "./components/discovery-header";
import ListSection from "../../components/list-section";
import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
import DiscoveryList from "./components/discovery-list";
import DiscoveryListItem from "./components/discovery-list-item";
import ButtonIconFloat from "../../components/button-icon-float";

const Discovery = () => (
  <React.Fragment>
    <ContainerScroll>
      <DiscoveryHeader />
      <ListSection
        /* eslint-disable-next-line */
        sections={[
          { data: [{ discoveryGroups: _.times(10, _.constant({})) }] }
        ]}
        renderSectionHeader={() => (
          /* eslint-disable-next-line */
          <DiscoveryListSectionHeader type="h3">
            All groups
          </DiscoveryListSectionHeader>
        )}
        renderItem={({ item: { discoveryGroups } }) => (
          <DiscoveryList
            data={discoveryGroups}
            renderItem={() => <DiscoveryListItem onClick={() => undefined} />}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        )}
      />
    </ContainerScroll>
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

export default Discovery;
