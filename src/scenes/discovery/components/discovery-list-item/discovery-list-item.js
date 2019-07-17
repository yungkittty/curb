import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ListItemCircleText from "../../../../components/list-item-circle-text";
import Button from "../../../../components/button";
import ImageGroup from "../../../../components/image-group";
import withGroup from "../../../../hocs/with-group";

const DiscoveryListItem = ({ groupId, groupName, theme }) => (
  <ListItemCircleText
    as={Button}
    onClick={`/groups/${groupId}`}
    component={ImageGroup}
    groupId={groupId}
    placeholderColor={theme.primaryVariantColor}
    text={groupName}
  />
);

DiscoveryListItem.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withGroup,
  withTheme
])(DiscoveryListItem);
