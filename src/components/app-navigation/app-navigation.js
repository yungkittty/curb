import _ from "lodash";
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
import Settings from "../../scenes/settings";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";

const AppNavigation = ({
  // eslint-disable-line
  showAppModal,
  userId,
  userGroupsId,
  theme
}) => (
  <NavigationContainer>
    {!userId ? (
      <NavigationButtonIcon
        icon="sign-in-alt"
        size="small"
        color={theme.primaryColor}
        onClick={() => showAppModal({ scene: SignIn })}
      />
    ) : (
      <ButtonImageUser
        userId={userId}
        size="small"
        placeholderColor={theme.secondaryVariantColor}
        style={{ marginBottom: 10 }}
      />
    )}
    <NavigationRule />
    <ListFlat
      data={userGroupsId}
      keyExtractor={userGroupId => userGroupId}
      renderItem={({ item: userGroupId }) => (
        <ButtonImageGroup
          groupId={userGroupId}
          size="small"
          placeholderColor={theme.secondaryVariantColor}
          style={{ marginBottom: 10 }}
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
      onClick={() => showAppModal({ scene: Settings })}
    />
  </NavigationContainer>
);

AppNavigation.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  userGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flow([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTheme
])(AppNavigation);
