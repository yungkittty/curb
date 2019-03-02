import React from "react";
import ListFlat from "../../../../components/list-flat";

const DiscoveryList = props => (
  <ListFlat
    {...props}
    contentContainerStyle={{ paddingLeft: 20 }}
    getItemLayout={(_, itemIndex) => ({
      length: 90,
      offset: 90 * itemIndex,
      index: itemIndex
    })}
  />
);

export default DiscoveryList;
