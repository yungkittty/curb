import React from "react";
import ListFlat from "../list-flat";

const AppModalSceneList = props => (
  <ListFlat
    {...props}
    getItemLayout={(_, itemIndex) => ({
      length: 125,
      offset: 125 * itemIndex,
      index: itemIndex
    })}
  />
);

export default AppModalSceneList;
