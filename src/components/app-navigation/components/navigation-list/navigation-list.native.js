import React from "react";
import PropTypes from "prop-types";
import ListFlat from "../../../list-flat";
import withGroups from "../../../../hocs/with-groups";

const NavigationList = ({ groupsId, ...others }) => (
  <ListFlat
    {...others}
    data={groupsId}
    getItemLayout={(_, itemIndex) => ({
      length: 60,
      offset: 60 * itemIndex,
      index: itemIndex
    })}
  />
);

NavigationList.propTypes = {
  groupsId: PropTypes.array.isRequired // eslint-disable-line
};

export default withGroups(NavigationList);
