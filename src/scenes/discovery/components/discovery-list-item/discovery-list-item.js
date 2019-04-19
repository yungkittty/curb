import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Container from "../../../../components/container";
import ListItemButtonContainer from "./components/list-item-button-container";
import ImageGroup from "../../../../components/image-group";
import ListItemTitle from "./components/list-item-title";
import { platformBools } from "../../../../configurations/platform";

// https://stackoverflow.com/a/38997047

const DiscoveryListItem = ({
  // eslint-disable-line
  discoveryGroupId,
  discoveryGroupName,
  theme
}) => (
  <Container>
    <ListItemButtonContainer onClick={`/groups/${discoveryGroupId}`}>
      <React.Fragment>
        <ImageGroup
          groupId={discoveryGroupId}
          size="medium"
          placeholderColor={theme.primaryVariantColor}
          style={{ marginBottom: platformBools.isReact ? 20 : 10 }}
        />
        <ListItemTitle>
          {/* eslint-disable-line */}
          {discoveryGroupName}
        </ListItemTitle>
      </React.Fragment>
    </ListItemButtonContainer>
  </Container>
);

DiscoveryListItem.propTypes = {
  discoveryGroupId: PropTypes.string.isRequired,
  discoveryGroupName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(DiscoveryListItem);
