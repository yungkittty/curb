import React from "react";
import ListFlat from "../list-flat";

const ListCard = props => (
  <ListFlat
    {...props}
    style={{ marginBottom: 80 }}
    getItemLayout={(_, itemIndex) => ({
      length: 460 + 60,
      offset: (460 + 60) * itemIndex,
      index: itemIndex
    })}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
);

export default ListCard;
