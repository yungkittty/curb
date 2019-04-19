import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import ImageGroup from "../../../../components/image-group";
import HeaderTitle from "./components/header-title";

const GroupListHeader = ({
  // eslint-disable-line
  userGroupsId,
  groupId,
  groupName,
  groupStatus,
  groupTheme,
  theme
}) => (
  <HeaderContainer groupTheme={groupTheme}>
    <React.Fragment>
      {groupStatus === "public" || _.includes(userGroupsId, groupId) ? (
        <HeaderButtonIcon
          icon="info-circle"
          size="small"
          color={theme.backgroundColor}
          onClick={() => undefined} // eslint-disable-next-line
        />
      ) : null}
      <ImageGroup
        // eslint-disable-line
        groupId={groupId}
        size="large"
        placeholderColor={theme[`group${_.capitalize(groupTheme)}VariantColor`]}
      />
      <HeaderTitle type="h1" weight={700}>
        {/* eslint-disable-line */}
        {groupName}
      </HeaderTitle>
    </React.Fragment>
  </HeaderContainer>
);

GroupListHeader.propTypes = {
  userGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  groupId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default GroupListHeader;
