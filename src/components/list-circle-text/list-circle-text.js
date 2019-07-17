import React from "react";
import ListFlat from "../list-flat";

const ListCircleText = props => (
  <ListFlat
    {...props}
    style={{ flexShrink: 0, marginBottom: 80 }}
    getItemLayout={(_, itemIndex) => ({
      length: 140,
      offset: 140 * itemIndex,
      index: itemIndex
    })}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
);

export default ListCircleText;
