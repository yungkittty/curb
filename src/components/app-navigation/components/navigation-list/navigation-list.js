import React from "react";
import ListFlat from "../../../list-flat";

const NavigationList = props => (
  <ListFlat
    {...props}
    getItemLayout={(_, itemIndex) => ({
      length: 70,
      offset: 70 * itemIndex,
      index: itemIndex
    })}
  />
);

export default NavigationList;
