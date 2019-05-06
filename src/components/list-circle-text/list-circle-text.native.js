import React from "react";
import ListFlat from "../list-flat";

const ListCircleText = props => (
  <ListFlat
    {...props}
    getItemLayout={(_, itemIndex) => ({
      length: 90,
      offset: 90 * itemIndex,
      index: itemIndex
    })}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
);

export default ListCircleText;
