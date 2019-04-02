import React from "react";
import { isIphoneX } from "react-native-device-detection";
import ListSection from "../../../../components/list-section";

const DiscoveryContainer = props => (
  <ListSection
    {...props}
    contentContainerStyle={{ paddingTop: isIphoneX ? 30 : 20 }}
  />
);

export default DiscoveryContainer;
