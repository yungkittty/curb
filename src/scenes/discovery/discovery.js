import _ from "lodash";
import React from "react";
import DiscoveryContainer from "./components/discovery-container";
import DiscoveryListSection from "./components/discovery-list-section";
import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
import DiscoveryList from "./components/discovery-list";
import DiscoveryListItem from "./components/discovery-list-item";
import ButtonFloating from "../../components/button-floating";

/** @todo scrollEnabled = false & forwardRef ! */
/** @todo width: 50%; || width: calc(50%); */

const Discovery = () => (
  <DiscoveryContainer>
    <DiscoveryListSection
      sections={[{ data: [{ X: _.times(25, _.constant({})) }] }]}
      renderSectionHeader={() => (
        <DiscoveryListSectionHeader>
          {/* eslint-disable-next-line */}
          {}
        </DiscoveryListSectionHeader>
      )}
      renderItem={({ item }) => (
        <DiscoveryList
          /* eslint-disable-next-line */
          data={item.X}
          renderItem={() => <DiscoveryListItem to={{}} />}
          horizontal
        />
      )}
    />
    <ButtonFloating icon="plus" onClick={() => undefined} />
  </DiscoveryContainer>
);

export default Discovery;
