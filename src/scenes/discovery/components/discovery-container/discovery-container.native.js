import React from "react";
import { windowDimensions } from "../../../../configurations/window";
import ListSection from "../../../../components/list-section";

const DiscoveryContainer = props => (
  <ListSection {...props} contentContainerStyle={{ paddingTop: windowDimensions.statusBarHeight }} />
);

export default DiscoveryContainer;
