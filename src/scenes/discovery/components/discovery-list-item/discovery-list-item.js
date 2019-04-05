import React from "react";
import PropTypes from "prop-types";
import Container from "../../../../components/container";
import ListItemButtonContainer from "./components/list-item-button-container";
import ListItemImage from "./components/list-item-image";
import ListItemTitle from "./components/list-item-title";

// https://stackoverflow.com/a/38997047

const DiscoveryListItem = ({
  discoveryGroupId,
  discoveryGroupName,
  discoveryGroupAvatarUrl
}) => (
  <Container>
    <ListItemButtonContainer onClick={`/groups/${discoveryGroupId}`}>
      <React.Fragment>
        <ListItemImage
          src={`${process.env.REACT_APP_API_URL}${discoveryGroupAvatarUrl}`}
        />
        <ListItemTitle>{discoveryGroupName}</ListItemTitle>
      </React.Fragment>
    </ListItemButtonContainer>
  </Container>
);

DiscoveryListItem.propTypes = {
  discoveryGroupId: PropTypes.string.isRequired,
  discoveryGroupName: PropTypes.string.isRequired,
  discoveryGroupAvatarUrl: PropTypes.string.isRequired
};

export default DiscoveryListItem;
