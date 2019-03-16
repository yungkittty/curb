import _ from "lodash";
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
<<<<<<< HEAD
// import SignIn from "../../scenes/sign-in";
import GroupQr from "../../scenes/group/scenes/group-x/scenes/group-qr";
=======
import SignIn from "../../scenes/sign-in";
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16

const AppNavigation = ({
  showAppModal,
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
<<<<<<< HEAD
        onClick={() => showAppModal({ scene: GroupQr })}
=======
        onClick={() => showAppModal({ scene: SignIn })}
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16
      />
    ) : (
      <NavigationButtonImage
        src={`${process.env.REACT_APP_API_URL}${_.replace(
          currentUserAvatarUrl,
          "medium",
          "small"
        )}`}
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
  showAppModal: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  currentUserToken: PropTypes.string.isRequired,
  currentUserAvatarUrl: PropTypes.string.isRequired,
  currentUserGroupsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(AppNavigation);
