import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import NavigationContainer from "./components/navigation-container";
import NavigationLinkIcon from "./components/navigation-link-icon";
import NavigationLinkImage from "./components/navigation-link-image";
import NavigationList from "./components/navigation-list";
import NavigationListItem from "./components/navigation-list-item";
import NavigationListFooter from "./components/navigation-list-footer";

const AppNavigation = ({ theme }) => (
  <NavigationContainer>
    {/* eslint-disable-next-line */}
    {true ? (
      <NavigationLinkIcon
        name="user"
        size="medium"
        color={theme.pimaryColor}
        to={{ pathname: "/sign-in", state: { isModal: true } }}
      />
    ) : (
      <NavigationLinkImage src="" to={`/users/${NaN}`} />
    )}
    {/* NavigationLinkList ? */}
    <NavigationList
      data={[]}
      renderItem={() => (
        /* NavigationLinkListItem ? */
        <NavigationListItem key="" src="" to={`/groups/${NaN}`} />
      )}
      ListFooterComponent={() => (
        /* NavigationLinkListFooter ? */
        <NavigationListFooter
          name="plus"
          size="small"
          color={theme.secondaryVariantColor}
          to="/discovery"
        />
      )}
      contentContainerStyle={{
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10
      }}
      showsVerticalScrollIndicator={false}
    />
    <NavigationLinkIcon
      name="cog"
      size="medium"
      color={theme.pimaryColor}
      to={{ pathname: "/settings", state: { isModal: true } }}
    />
  </NavigationContainer>
);

AppNavigation.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired
};

export default withTheme(AppNavigation);
