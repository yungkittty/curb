import React from "react";
import PropTypes from "prop-types";
import NavigationButtonImage from "../navigation-button-image";

const NavigationListItem = ({
  currentUserGroupId,
  currentUserGroupAvatarURL
}) => (
  <NavigationButtonImage
    src={currentUserGroupAvatarURL}
    to={`/groups/${currentUserGroupId}`}
  />
);

NavigationListItem.propTypes = {
  currentUserGroupId: PropTypes.string.isRequired,
  currentUserGroupAvatarURL: PropTypes.string.isRequired
};

export default NavigationListItem;
