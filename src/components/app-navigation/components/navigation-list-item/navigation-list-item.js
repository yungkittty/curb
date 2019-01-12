import React from "react";
import PropTypes from "prop-types";
import NavigationLinkImage from "../navigation-link-image";

const NavigationListItem = ({
  currentUserGroupId,
  currentUserGroupAvatarUrl
}) => (
  <NavigationLinkImage
    src={currentUserGroupAvatarUrl}
    to={`/groups/${currentUserGroupId}`}
  />
);

NavigationListItem.propTypes = {
  currentUserGroupId: PropTypes.string.isRequired,
  currentUserGroupAvatarUrl: PropTypes.string.isRequired
};

export default NavigationListItem;
