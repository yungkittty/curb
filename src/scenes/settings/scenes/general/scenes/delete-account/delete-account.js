import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../../../components/loader";
import ContentContainer from "./components/content-container";
import AppModalSceneTitle from "../../../../../../components/app-modal-scene-title";
import ContentDescription from "./components/content-description";
// eslint-disable-next-line
import General from "../../../general";

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
      text: t("general.menu.deleteAccount.title")
    });
    setAppModalHeaderLeftButton({
      icon: "arrow-left",
      onClick: () => setAppModalScene({ scene: General, direction: -1 })
    });
    setAppModalFooterButton({
      text: t("general.menu.deleteAccount.buttonTitle"),
      onClick: this.deleteAccount
    });
  }

  deleteAccount() {
    const { deleteAccount } = this.props;
    deleteAccount();
  }

  render() {
    const { t, isSignUpFetching } = this.props;

    return isSignUpFetching ? (
      <Loader />
    ) : (
      <ContentContainer>
        <AppModalSceneTitle>{t("general.menu.deleteAccount.contentTitle")}</AppModalSceneTitle>
        <ContentDescription type="h4">
          {t("general.menu.deleteAccount.contentDescription")}
        </ContentDescription>
      </ContentContainer>
    );
  }
}

DeleteAccount.propTypes = {
  t: PropTypes.func.isRequired,
  isSignUpFetching: PropTypes.bool.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withTranslation("settings")(DeleteAccount);
