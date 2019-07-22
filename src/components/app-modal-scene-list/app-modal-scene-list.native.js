import React from "react";
import ListFlat from "../list-flat";

const AppModalSceneList = props => (
  <ListFlat
    {...props}
    getItemLayout={(_, itemIndex) => ({
      length: 100,
      offset: 100 * itemIndex,
      index: itemIndex
    })}
  />
);

export default AppModalSceneList;
