import React from "react";
import PropTypes from "prop-types";
import NavigationButtonImage from "../navigation-button-image";

const NavigationListItem = ({
  currentUserGroupId,
  currentUserGroupAvatarUrl
}) => (
  <NavigationButtonImage
    src={currentUserGroupAvatarUrl}
    onClick={`/groups/${currentUserGroupId}`}
  />
);

NavigationListItem.propTypes = {
  currentUserGroupId: PropTypes.string.isRequired,
  currentUserGroupAvatarUrl: PropTypes.string.isRequired
};

export default NavigationListItem;
