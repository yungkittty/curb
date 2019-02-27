import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import NavigationContainer from "./components/navigation-container";
import NavigationButtonIcon from "./components/navigation-button-icon";
import NavigationButtonImage from "./components/navigation-button-image";
import NavigationRule from "./components/navigation-rule";
import ListFlat from "../list-flat";
import NavigationListItem from "./components/navigation-list-item";
import NavigationListFooter from "./components/navigation-list-footer";

const AppNavigation = ({
  currentUserId,
  currentUserToken,
  currentUserAvatarUrl,
  currentUserGroupsIds,
  theme
}) => (
  <NavigationContainer>
    {!currentUserToken ? (
      <NavigationButtonIcon
        icon="sign-in-alt"
        size="medium"
        color={theme.primaryColor}
        onClick={{ pathname: "/sign-in", state: { isModal: true } }}
      />
    ) : (
      <NavigationButtonImage
        src={`${process.env.REACT_APP_API_URL}${currentUserAvatarUrl}`}
        onClick={`/users/${currentUserId}`}
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
          onClick="/"
        />
      )}
      contentContainerStyle={{ paddingTop: 10 }}
      showsVerticalScrollIndicator={false}
    />
    <NavigationRule style={{ paddingBottom: 10 }} />
    <NavigationButtonIcon
      icon="cog"
      size="medium"
      color={theme.primaryColor}
      onClick={() => undefined}
    />
  </NavigationContainer>
);

AppNavigation.propTypes = {
  currentUserId: PropTypes.string.isRequired,
  currentUserToken: PropTypes.string.isRequired,
  currentUserAvatarUrl: PropTypes.string.isRequired,
  currentUserGroupsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(AppNavigation);
