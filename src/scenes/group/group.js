/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import GroupList from "./components/group-list";
import GroupListHeader from "./components/group-list-header";
import GroupListSectionHeader from "./components/group-list-section-header";
import GroupListSectionItem from "./components/group-list-section-item";
import ButtonIconFloat from "../../components/button-icon-float";

const Group = ({
  isGroupFetching,
  groupId,
  groupName,
  isGroupPublic,
  groupAvatarUrl,
  groupMediaIds,
  groupTheme,
  theme
}) => (
  <React.Fragment>
    <GroupList
      sections={[{ data: groupMediaIds }]}
      keyExtractor={(groupMediaId, _) => groupMediaId}
      ListHeaderComponent={() => (
        <GroupListHeader
          isGroupFetching={isGroupFetching}
          groupId={groupId}
          groupName={groupName}
          groupAvatarUrl={groupAvatarUrl}
          groupTheme={groupTheme}
          theme={theme}
        />
      )}
      renderSectionHeader={() => (
        <GroupListSectionHeader
          // eslint-disable-line
          groupTheme={groupTheme}
          theme={theme}
        />
      )}
      renderItem={({ item: groupMediaId }) => (
        <GroupListSectionItem
          // eslint-disable-line
          groupMediaId={groupMediaId}
        />
      )}
    />
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

export default withTheme(Group);
