import React from "react";
import PropTypes from "prop-types";
import NavigationLinkImage from "../navigation-link-image";

const NavigationListItem = ({
  currentUserGroupId,
  currentUserGroupAvatarURL
}) => (
  <NavigationLinkImage
    src={currentUserGroupAvatarURL}
    to={`/groups/${currentUserGroupId}`}
  />
);

NavigationListItem.propTypes = {
  currentUserGroupId: PropTypes.string.isRequired,
  currentUserGroupAvatarURL: PropTypes.string.isRequired
};

export default NavigationListItem;
