import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderImage from "./components/header-image";
import HeaderContentContainer from "./components/header-content-container";
import HeaderTitle from "./components/header-title";
import HeaderCategory from "./components/header-category";
import HeaderDescription from "./components/header-description";
import HeaderButton from "./components/header-button";

const GroupListItemHeader = ({
  // eslint-disable-line
  groupId,
  groupCreatorId,
  groupName,
  groupCategory,
  groupDescription,
  groupStatus,
  groupGradientAngle,
  groupGradientColors,
  currentUserId,
  currentUserGroupsId
}) => {
  const isCurrentUser = !!currentUserId;
  const isCurrentUserIn = _.includes(currentUserGroupsId, groupId);
  const isCurrentUserCreator = _.isEqual(currentUserId, groupCreatorId);
  return (
    <HeaderContainer
      // eslint-disable-line
      gradientAngle={groupGradientAngle}
      gradientColors={groupGradientColors}
    >
      <HeaderImage
        // eslint-disable-line
        groupId={groupId}
      />
      <HeaderContentContainer>
        <HeaderTitle
          // eslint-disable-line
          groupName={groupName}
          groupStatus={groupStatus}
          groupGradientColors={groupGradientColors}
        />
        <HeaderCategory
          // eslint-disable-line
          groupCategory={groupCategory}
          groupGradientColors={groupGradientColors}
        />
        <HeaderDescription isIndented>
          {/* eslint-disable-line */}
          {groupDescription}
        </HeaderDescription>
        <HeaderButton
          // eslint-disable-line
          isShadowShowed={!isCurrentUserIn}
          isCurrentUser={isCurrentUser}
          isCurrentUserIn={isCurrentUserIn}
          isCurrentUserCreator={isCurrentUserCreator}
          groupId={groupId}
          groupGradientAngle={groupGradientAngle}
          groupGradientColors={groupGradientColors}
        />
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

GroupListItemHeader.propTypes = {
  groupId: PropTypes.string.isRequired,
  groupCreatorId: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  groupCategory: PropTypes.string.isRequired,
  groupDescription: PropTypes.string.isRequired,
  groupStatus: PropTypes.string.isRequired,
  groupGradientAngle: PropTypes.number.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentUserId: PropTypes.string.isRequired,
  currentUserGroupsId: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GroupListItemHeader;
