import React from "react";
import ListFlat from "../list-flat";

const ListCard = props => (
  <ListFlat
    {...props}
    style={{ marginBottom: 80, justifyContent: "center" }}
    getItemLayout={(_, itemIndex) => ({
      length: 460,
      offset: 460 * itemIndex,
      index: itemIndex
    })}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
);

export default ListCard;
