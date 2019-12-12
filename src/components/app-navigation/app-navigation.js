import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import NavigationContainer from "./components/navigation-container";
import NavigationButton from "./components/navigation-button";
import Icon from "../icon";
import ImageUser from "../image-user";
import ImageGroup from "../image-group";
import NavigationRule from "./components/navigation-rule";
import NavigationList from "./components/navigation-list";
import NavigationListFooter from "./components/navigation-list-footer";
import SignIn from "../../scenes/sign-in";
import Settings from "../../scenes/settings";
import withAppModal from "../../hocs/with-app-modal";
import withCurrentUser from "../../hocs/with-current-user";
import { platformBools } from "../../configurations/platform";

const AppNavigation = ({
  // eslint-disable-line
  showAppModal,
  currentUserId,
  currentUserChatsId,
  currentUserGroupsId,
  theme: { primaryColor, secondaryVariantColor }
}) => (
  <NavigationContainer>
    {hideContainer => (
      <React.Fragment>
        {!currentUserId ? (
          <NavigationButton
            component={Icon}
            icon="sign-in-alt"
            size="small"
            color={primaryColor}
            backgroundColor={secondaryVariantColor}
            onClick={() => showAppModal({ scene: SignIn })}
            hideContainer={hideContainer}
          />
        ) : (
          <>
            <NavigationButton
              component={ImageUser}
              shouldFetch={false}
              userId={currentUserId}
              size="small"
              placeholderColor={secondaryVariantColor}
              onClick={`/users/${currentUserId}`}
              hideContainer={hideContainer}
            />
            {currentUserChatsId.length ? (
              <>
                <NavigationRule />
                <NavigationButton
                  component={Icon}
                  icon="comment-alt"
                  size="small"
                  color={primaryColor}
                  backgroundColor={secondaryVariantColor}
                  style={{ marginTop: 10 }}
                  onClick={`/chats${platformBools.isWeb ? `/${currentUserChatsId[0]}` : ""}`}
                  hideContainer={hideContainer}
                />
              </>
            ) : null}
          </>
        )}
        <NavigationRule />
        <NavigationList
          groupsId={currentUserGroupsId}
          keyExtractor={userGroupId => userGroupId}
          renderItem={({ item: userGroupId }) => (
            <NavigationButton
              component={ImageGroup}
              shouldFetch={false}
              groupId={userGroupId}
              size="small"
              placeholderColor={secondaryVariantColor}
              onClick={`/groups/${userGroupId}`}
              hideContainer={hideContainer}
            />
          )}
          ListFooterComponent={() => (
            <NavigationListFooter
              component={Icon}
              icon="plus"
              size="extra-small"
              color={secondaryVariantColor}
              onClick="/"
              hideContainer={hideContainer}
            />
          )}
          contentContainerStyle={{ paddingTop: 10 }}
          showsVerticalScrollIndicator={false}
        />
        <NavigationRule style={{ paddingBottom: 10 }} />
        <NavigationButton
          component={Icon}
          icon="cog"
          size="small"
          color={primaryColor}
          backgroundColor={secondaryVariantColor}
          onClick={() => showAppModal({ scene: Settings })}
          hideContainer={hideContainer}
        />
      </React.Fragment>
    )}
  </NavigationContainer>
);

AppNavigation.propTypes = {
  showAppModal: PropTypes.func.isRequired,
  currentUserId: PropTypes.string.isRequired,
  currentUserGroupsId: PropTypes.array.isRequired, // eslint-disable-line
  currentUserChatsId: PropTypes.array.isRequired, // eslint-disable-line
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  withAppModal,
  withCurrentUser,
  withTheme
])(AppNavigation);
