/* eslint-disable */

import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withRouter, matchPath } from "react-router";
import HeaderContainer from "./components/header-container";
import HeaderButtonIcon from "./components/header-button-icon";
import Text from "../../../../components/text";
import HeaderButtonText from "./components/header-button-text";
import HeaderRule from "./components/header-rule";

class GroupListSectionHeader extends React.Component {
  constructor(props) {
    super(props);
    console.log("MOUNT!");
    console.log(props.currentUserGroups);
    console.log(matchPath(props.location.pathname, { path: "/groups/:id" }).params.id);

    this.state = {
      isShowed: !_.includes(
        props.currentUserGroups,
        matchPath(props.location.pathname, { path: "/groups/:id" }).params.id
      )
    };
  }

  componentDidUpdate(prevProps) {
    const { location, currentUserGroups } = this.props;
    if (location !== prevProps.location || currentUserGroups !== prevProps.currentUserGroups) {
      console.log("PASS");
      this.setState({
        isShowed: !_.includes(
          currentUserGroups,
          matchPath(location.pathname, { path: "/groups/:id" }).params.id
        )
      });
    }
  }

  render() {
    const { isShowed } = this.state;
    const { groupTheme, theme } = this.props;
    return isShowed ? (
      <HeaderContainer>
        <HeaderButtonIcon
          // eslint-disable-line
          icon="times"
          size="extra-small"
          color={theme.primaryColor}
          onClick={() => this.setState({ isShowed: false })}
        />
        <Text type="h4">
          {/* eslint-disable-line */}
          {"You have been invited to this group"}
        </Text>
        <HeaderButtonText
          // eslint-disable-line
          text={"Join group"}
          weight={700}
          contentTextStyle={{ color: theme.backgroundColor }}
          groupTheme={groupTheme}
        />
        <HeaderRule />
      </HeaderContainer>
    ) : null;
  }
}

export default withRouter(GroupListSectionHeader);
