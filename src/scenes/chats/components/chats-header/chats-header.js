import _ from "lodash";
import React, { useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { withTheme } from "styled-components";
import AppHeader from "../../../../components/app-header";
import HeaderMiddle from "./components/header-middle";
import withGroup from "../../../../hocs/with-group";

const ChatsHeader = ({
  // eslint-disable-line
  history,
  groupId,
  groupName,
  groupTheme,
  theme
}) => {
  const onBackClick = useCallback(() => history.goBack(), [history]);

  const getLeftButtons = useMemo(() => {
    const leftButtons = [];
    const leftButtonsFirstIcon = "arrow-left";
    const leftButtonsFirstColor = groupId ? "white" : "black";
    const leftButtonsFirstOnClick = onBackClick;
    leftButtons[0] = {
      icon: leftButtonsFirstIcon,
      color: leftButtonsFirstColor,
      onClick: leftButtonsFirstOnClick
    };
    return leftButtons;
  }, [groupId]);

  const renderMiddle = useCallback(
    () => (
      <HeaderMiddle
        // eslint-disable-line
        groupId={groupId}
        groupName={groupName}
      />
    ),
    [groupId, groupName]
  );

  const getBackgroundColor = useMemo(() => {
    if (groupId && groupTheme) {
      return theme[`group${_.capitalize(groupTheme)}VariantColor`] || "transparent";
    }
    return theme.primaryVariantColor;
  }, [groupId, groupTheme]);

  return (
    <AppHeader
      // eslint-disable-line
      leftButtons={getLeftButtons}
      renderMiddle={renderMiddle}
      onBackClick={onBackClick}
      backgroundColor={getBackgroundColor}
    />
  );
};

ChatsHeader.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withRouter,
  withGroup,
  withTheme
])(ChatsHeader);
