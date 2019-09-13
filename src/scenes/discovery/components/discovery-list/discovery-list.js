import React from "react";
import PropTypes from "prop-types";
import ListCircleText from "../../../../components/list-circle-text";
import { platformBools } from "../../../../configurations/platform";
import withGroups from "../../../../hocs/with-groups";

const DiscoveryList = ({ groupsId, ...others }) => (
  <ListCircleText
    // eslint-disable-line
    {...others}
    data={groupsId}
    contentContainerStyle={{ paddingLeft: platformBools.isWeb ? 40 : 20 }}
  />
);

DiscoveryList.propTypes = {
  groupsId: PropTypes.array.isRequired // eslint-disable-line
};

export default withGroups(DiscoveryList);
