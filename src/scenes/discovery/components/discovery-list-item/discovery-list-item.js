import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Container from "../../../../components/container";
import ListItemButtonContainer from "./components/list-item-button-container";
import ImageGroup from "../../../../components/image-group";
import ListItemTitle from "./components/list-item-title";
import { platformBools } from "../../../../configurations/platform";
import withGroup from "../../../../hocs/with-group";

// https://stackoverflow.com/a/38997047

/** @TODO Placeholder ! */

const DiscoveryListItem = ({
  // eslint-disable-line
  groupId,
  groupName,
  theme
}) => (
  <Container>
    <ListItemButtonContainer onClick={`/groups/${groupId}`}>
      <React.Fragment>
        <ImageGroup
          groupId={groupId}
          size="medium"
          placeholderColor={theme.primaryVariantColor}
          style={{ marginBottom: platformBools.isReact ? 20 : 10 }}
        />
        <ListItemTitle>
          {/* eslint-disable-line */}
          {groupName}
        </ListItemTitle>
      </React.Fragment>
    </ListItemButtonContainer>
  </Container>
);

DiscoveryListItem.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flow([
  // eslint-disable-line
  withGroup,
  withTheme
])(DiscoveryListItem);
