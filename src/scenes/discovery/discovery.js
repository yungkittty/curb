import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import DiscoveryContainer from "./components/discovery-container";
import DiscoveryTitle from "./components/discovery-title";
import DiscoverySubtitle from "./components/discovery-subtitle";
import DiscoveryListSection from "./components/discovery-list-section";
import DiscoveryListSectionHeader from "./components/discovery-list-section-header";
import DiscoverySection from "./components/discovery-section";
import DiscoverySectionItem from "./components/discovery-section-item";
import ButtonIconFloat from "../../components/button-icon-float";

const Discovery = ({ t }) => (
  <DiscoveryContainer>
    <DiscoveryTitle type="h1">
      {/* eslint-disable-next-line */}
      {t("discovery:discoveryTitle")}
    </DiscoveryTitle>
    <DiscoverySubtitle type="h2">
      {t("discovery:discoverySubtitle")}
    </DiscoverySubtitle>
    <DiscoveryListSection
      sections={[{ data: [{ X: _.times(25, _.constant({})) }] }]}
      renderSectionHeader={() => (
        <DiscoveryListSectionHeader type="h2">
          {t("discovery:discoveryListSectionHeader")}
        </DiscoveryListSectionHeader>
      )}
      renderItem={({ item }) => (
        <DiscoverySection
          /* eslint-disable-next-line */
          data={item.X}
          renderItem={() => <DiscoverySectionItem to={{}} />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        />
      )}
    />
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </DiscoveryContainer>
);

Discovery.propTypes = { t: PropTypes.func.isRequired };

export default translate()(Discovery);
