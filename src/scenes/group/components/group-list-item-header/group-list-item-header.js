import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import HeaderContainer from "./components/header-container";
import HeaderImage from "./components/header-image";
import HeaderContentContainer from "./components/header-content-container";
import HeaderTitle from "./components/header-title";
import HeaderStadiumsContainer from "./components/header-stadiums-container";
import HeaderCategory from "./components/header-category";
import HeaderUserNumber from "./components/header-user-number";
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
  groupUsersId,
  currentUserId,
  currentUserGroupsId
}) => {
  const isCurrentUser = !!currentUserId;
  const isCurrentUserIn = groupId ? _.includes(currentUserGroupsId, groupId) : false;
  const isCurrentUserCreator = groupCreatorId ? _.isEqual(currentUserId, groupCreatorId) : false;
  const stadiumContentColor = groupGradientColors[1];
  return (
    <HeaderContainer
      // eslint-disable-line
      gradientAngle={groupGradientAngle}
      gradientColors={groupGradientColors}
    >
      <HeaderImage
        // eslint-disable-line
        groupId={groupId}
        groupGradientColors={groupGradientColors}
      />
      <HeaderContentContainer>
        <HeaderTitle
          // eslint-disable-line
          groupName={groupName}
          groupStatus={groupStatus}
          groupGradientColors={groupGradientColors}
        />
        <HeaderStadiumsContainer>
          <HeaderCategory
            // eslint-disable-line
            groupCategory={groupCategory}
            stadiumContentColor={stadiumContentColor}
          />
          <HeaderUserNumber
            // eslint-disable-line
            groupUsersId={groupUsersId}
            stadiumContentColor={stadiumContentColor}
          />
        </HeaderStadiumsContainer>
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
  groupUsersId: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentUserId: PropTypes.string.isRequired,
  currentUserGroupsId: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GroupListItemHeader;
