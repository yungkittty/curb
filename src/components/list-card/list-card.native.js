import React from "react";
import ListFlat from "../list-flat";
import { windowDimensions } from "../../configurations/window";

const ListCard = props => {
  const width = windowDimensions.getWidth() - 90 + 8;
  return (
    <ListFlat
      {...props}
      style={{ marginBottom: 30 }}
      getItemLayout={(_, itemIndex) => ({
        length: width,
        offset: width * itemIndex,
        index: itemIndex
      })}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export default ListCard;
