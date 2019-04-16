import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import NavigationContainer from "./components/navigation-container";
import NavigationButtonIcon from "./components/navigation-button-icon";
import ButtonImageUser from "../button-image-user";
import ButtonImageGroup from "../button-image-group";
import NavigationRule from "./components/navigation-rule";
import ListFlat from "../list-flat";
import NavigationListFooter from "./components/navigation-list-footer";
import SignIn from "../../scenes/sign-in";

const AppNavigation = ({
  showAppModal,
  isCurrentUserFetching,
  currentUserId,
  currentUserAvatarUrl,
  currentUserGroupsIds,
  theme
}) => (
  <NavigationContainer>
    {!currentUserId ? (
      <NavigationButtonIcon
        icon="sign-in-alt"
        size="small"
        color={theme.primaryColor}
        onClick={() => showAppModal({ scene: SignIn })}
      />
    ) : (
      <ButtonImageUser
        isUserFetching={isCurrentUserFetching}
        userId={currentUserId}
        userAvatarUrl={currentUserAvatarUrl}
        size="small"
        placeholderColor={theme.secondaryVariantColor}
        style={{ marginBottom: 10 }}
        hasBeenFetched
      />
    )}
    <NavigationRule />
    <ListFlat
      data={currentUserGroupsIds}
      keyExtractor={currentUserGroupId => currentUserGroupId}
      renderItem={({ item: currentUserGroupId }) => (
        <ButtonImageGroup
          groupId={currentUserGroupId}
          size="small"
          placeholderColor={theme.secondaryVariantColor}
          style={{ marginBottom: 10 }}
          hasBeenFetched={false}
        />
      )}
      ListFooterComponent={() => (
        <NavigationListFooter
          icon="plus"
          size="extra-small"
          color={theme.secondaryVariantColor}
          onClick="/"
        />
      )}
      contentContainerStyle={{ paddingTop: 10 }}
      showsVerticalScrollIndicator={false}
    />
    <NavigationRule style={{ paddingBottom: 10 }} />
    <NavigationButtonIcon
      // eslint-disable-line
      icon="cog"
      size="small"
      color={theme.primaryColor}
      onClick={() => undefined}
    />
  </NavigationContainer>
);

AppNavigation.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  isCurrentUserFetching: PropTypes.bool.isRequired,
  currentUserId: PropTypes.string.isRequired,
  currentUserAvatarUrl: PropTypes.string.isRequired,
  currentUserGroupsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(AppNavigation);
