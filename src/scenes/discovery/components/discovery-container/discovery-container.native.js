import React from "react";
import ListSection from "../../../../components/list-section";
import { windowDimensions } from "../../../../configurations/window";

const DiscoveryContainer = props => (
  <ListSection {...props} contentContainerStyle={{ paddingTop: windowDimensions.statusBarHeight }} />
);

export default DiscoveryContainer;
