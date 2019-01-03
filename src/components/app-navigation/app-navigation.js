import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import NavigationContainer from "./components/navigation-container";
import NavigationLinkIcon from "./components/navigation-link-icon";
import NavigationLinkImage from "./components/navigation-link-image";
import NavigationRule from "./components/navigation-rule";
import ListFlat from "../list-flat";
import NavigationListItem from "./components/navigation-list-item";
import NavigationListFooter from "./components/navigation-list-footer";

const AppNavigation = ({
  currentUserId,
  currentUserToken,
  currentUserAvatarURL,
  currentUserGroupsIds,
  theme
}) => (
  <NavigationContainer>
    {!currentUserId || !currentUserToken ? (
      <NavigationLinkIcon
        icon="user"
        size="medium"
        color={theme.primaryColor}
        to={{ pathname: "/sign-in", state: { isModal: true } }}
      />
    ) : (
      <NavigationLinkImage
        src={`${currentUserAvatarURL}`}
        to={`/users/${currentUserId}`}
      />
    )}
    <NavigationRule />
    <ListFlat
      data={currentUserGroupsIds}
      keyExtractor={currentUserGroupId => currentUserGroupId}
      renderItem={({ item: currentUserGroupId }) => (
        <NavigationListItem currentUserGroupId={currentUserGroupId} />
      )}
      ListFooterComponent={() => (
        <NavigationListFooter
          icon="plus"
          size="small"
          color={theme.secondaryVariantColor}
          to="/"
        />
      )}
      contentContainerStyle={{ paddingTop: 10 }}
      showsVerticalScrollIndicator={false}
    />
    <NavigationRule style={{ paddingBottom: 10 }} />
    <NavigationLinkIcon
      icon="cog"
      size="medium"
      color={theme.primaryColor}
      to={{ pathname: "/settings", state: { isModal: true } }}
    />
  </NavigationContainer>
);

AppNavigation.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  currentUserToken: PropTypes.string.isRequired,
  currentUserAvatarURL: PropTypes.string.isRequired,
  currentUserGroupsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(AppNavigation);
