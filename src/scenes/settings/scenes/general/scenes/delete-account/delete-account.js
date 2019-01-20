import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { withNamespaces } from "react-i18next";
/* eslint-disable-next-line */
import General from "../../";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentDescription from "./components/content-description";

class DeleteAccount extends Component {
  constructor(props) {
    super(props);
    const {
      t,
      setTitle,
      setLeftClick,
      setLeftIcon,
      setComponent,
      setButtonTitle,
      setButtonClick
    } = this.props;

    this.deleteAccount = this.deleteAccount.bind(this);

    setTitle(t("settings:general.menu.deleteAccount.title"));
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(General, -1));
    setButtonTitle(t("settings:general.menu.deleteAccount.buttonTitle"));
    setButtonClick(this.deleteAccount);
  }

  deleteAccount() {
    const { deleteAccount } = this.props;

    deleteAccount();
  }

  render() {
    const { currentUserToken, t } = this.props;

    return !currentUserToken ? (
      <Redirect to="/" />
    ) : (
      <ContentContainer>
        <ContentTitle>
          {t("settings:general.menu.deleteAccount.contentTitle")}
        </ContentTitle>
        <ContentDescription>
          {t("settings:general.menu.deleteAccount.contentDescription1")}
        </ContentDescription>
        <ContentDescription>
          {t("settings:general.menu.deleteAccount.contentDescription2")}
        </ContentDescription>
        <ContentDescription>
          {t("settings:general.menu.deleteAccount.contentDescription3")}
        </ContentDescription>
      </ContentContainer>
    );
  }
}

DeleteAccount.defaultProps = {
  currentUserToken: undefined,
  setTitle: undefined,
  setLeftClick: undefined,
  setLeftIcon: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

DeleteAccount.propTypes = {
  currentUserToken: PropTypes.string,
  t: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  setTitle: PropTypes.func,
  setLeftClick: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default withNamespaces()(DeleteAccount);
