import React from "react";
import ListFlat from "../../../list-flat";

const NavigationList = props => (
  <ListFlat
    {...props}
    getItemLayout={(_, itemIndex) => ({
      length: 60,
      offset: 60 * itemIndex,
      index: itemIndex
    })}
  />
);

export default NavigationList;
