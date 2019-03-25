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
      setAppModalHeaderText,
      setAppModalHeaderLeftButton,
      setAppModalScene,
      setAppModalFooterButton
    } = this.props;

    this.deleteAccount = this.deleteAccount.bind(this);

    setAppModalHeaderText({
      headerText: t("general.menu.deleteAccount.title")
    });
    setAppModalHeaderLeftButton({
      headerLeftIcon: "arrow-left",
      headerLeftOnClick: () =>
        setAppModalScene({ scene: General, sceneDirection: -1 })
    });
    setAppModalFooterButton({
      footerText: t("general.menu.deleteAccount.buttonTitle"),
      footerOnClick: this.deleteAccount
    });
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
          {t("general.menu.deleteAccount.contentTitle")}
        </ContentTitle>
        <ContentDescription>
          {t("general.menu.deleteAccount.contentDescription1")}
        </ContentDescription>
        <ContentDescription>
          {t("general.menu.deleteAccount.contentDescription2")}
        </ContentDescription>
        <ContentDescription>
          {t("general.menu.deleteAccount.contentDescription3")}
        </ContentDescription>
      </ContentContainer>
    );
  }
}

DeleteAccount.defaultProps = {
  currentUserToken: undefined
};

DeleteAccount.propTypes = {
  currentUserToken: PropTypes.string,
  t: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withNamespaces("settings")(DeleteAccount);
