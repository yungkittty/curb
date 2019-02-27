import React from "react";
import PropTypes from "prop-types";
import ListItemContainer from "./components/list-item-container";
import ListItemButtonImage from "./components/list-item-button-image";
import ListItemTitle from "./components/list-item-title";

const DiscoveryListItem = ({
  discoveryGroupId,
  discoveryGroupName,
  discoveryGroupAvatarUrl
}) => (
  <ListItemContainer>
    <ListItemButtonImage
      src={`${process.env.REACT_APP_API_URL}${discoveryGroupAvatarUrl}`}
      onClick={`/groups/${discoveryGroupId}`}
    />
    <ListItemTitle>
      {discoveryGroupName}
    </ListItemTitle>
  </ListItemContainer>
);

DiscoveryListItem.propTypes = {
  discoveryGroupId: PropTypes.string.isRequired,
  discoveryGroupName: PropTypes.string.isRequired,
  discoveryGroupAvatarUrl: PropTypes.string.isRequired
};

export default DiscoveryListItem;
