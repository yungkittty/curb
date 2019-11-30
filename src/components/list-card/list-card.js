import React from "react";
import ListFlat from "../list-flat";

const ListCard = props => (
  <ListFlat
    {...props}
    style={{ marginBottom: 80, justifyContent: "center" }}
    getItemLayout={(_, itemIndex) => ({
      length: 415,
      offset: 415 * itemIndex,
      index: itemIndex
    })}
    showsHorizontalScrollIndicator={false}
    horizontal
  />
);

export default ListCard;
