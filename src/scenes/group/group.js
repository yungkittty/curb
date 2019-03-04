import React from "react";
import ListFlat from "../../components/list-flat";
import ButtonIconFloat from "../../components/button-icon-float";

const Group = () => (
  <React.Fragment>
    <ListFlat data={[]} renderItem={() => null} />
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

export default Group;
