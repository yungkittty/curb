import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import GroupList from "./components/group-list";
import GroupListHeader from "./components/group-list-header";
import GroupListSectionHeader from "./components/group-list-section-header";
import GroupListSectionItem from "./components/group-list-section-item";
import ButtonIconFloat from "../../components/button-icon-float";
import withCurrentUser from "../../hocs/with-current-user";
import withGroup from "../../hocs/with-group";

const Group = ({
  userGroupsIds,
  isGettingGroup,
  groupId,
  groupName,
  groupAvatar,
  groupStatus,
  groupTheme,
  groupMediasId,
  theme
}) => (
  <React.Fragment>
    <GroupList
      sections={[{ data: groupMediasId }]}
      keyExtractor={groupMediaId => groupMediaId}
      ListHeaderComponent={() => (
        <GroupListHeader
          userGroupsIds={userGroupsIds}
          isGettingGroup={isGettingGroup}
          groupId={groupId}
          groupName={groupName}
          groupAvatar={groupAvatar}
          groupStatus={groupStatus}
          groupTheme={groupTheme}
          theme={theme}
        />
      )}
      renderSectionHeader={() => (
        <GroupListSectionHeader
          userGroupsIds={userGroupsIds}
          groupId={groupId}
          groupStatus={groupStatus}
          groupTheme={groupTheme}
          theme={theme}
        />
      )}
      renderItem={({ item: groupMediaId }) => (
        <GroupListSectionItem
          // eslint-disable-line
          mediaId={groupMediaId}
          theme={theme}
        />
      )}
    />
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

Group.propTypes = {
  userGroupsIds: PropTypes.array.isRequired, // eslint-disable-line
  isGettingGroup: PropTypes.bool.isRequired,
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  groupMediasId: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flow([
  // eslint-disable-line
  withCurrentUser,
  withGroup,
  withTheme
])(Group);
