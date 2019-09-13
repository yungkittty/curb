import React from "react";
import ListSection from "../../../../components/list-section";
import { windowDimensions } from "../../../../configurations/window";

const DiscoveryContainer = props => (
  <ListSection
    // eslint-disable-line
    {...props}
    contentContainerStyle={{ paddingTop: windowDimensions.getStatusBarHeight() }}
  />
);

export default DiscoveryContainer;
