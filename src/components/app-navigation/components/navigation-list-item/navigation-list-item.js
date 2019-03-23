import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import NavigationButtonImage from "../navigation-button-image";

const NavigationListItem = ({
  currentUserGroupId,
  currentUserGroupAvatarUrl
}) => (
  <NavigationButtonImage
    src={`https://api.curb-app.com${_.replace(
      currentUserGroupAvatarUrl,
      "medium",
      "small"
    )}`}
    onClick={`/groups/${currentUserGroupId}`}
  />
);

NavigationListItem.propTypes = {
  currentUserGroupId: PropTypes.string.isRequired,
  currentUserGroupAvatarUrl: PropTypes.string.isRequired
};

export default NavigationListItem;
