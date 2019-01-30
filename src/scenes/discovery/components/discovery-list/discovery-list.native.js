import React from "react";
import ListFlat from "../../../../components/list-flat";

const DiscoveryList = props => (
  <ListFlat
    {...props}
    style={{ height: 100 }}
    contentContainerStyle={{ paddingLeft: 20 }}
  />
);

export default DiscoveryList;
