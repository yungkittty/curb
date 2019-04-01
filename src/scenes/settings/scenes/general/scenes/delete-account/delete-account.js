import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import Loader from "../../../../../../components/loader";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentDescription from "./components/content-description";
/* eslint-disable-next-line */
import General from "../../";

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

    this.state = { loading: false };

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
    this.setState({ loading: true });
  }

  render() {
    const { t } = this.props;
    const { loading } = this.state;

    return loading ? (
      <Loader />
    ) : (
      <ContentContainer>
        <ContentTitle weight={700}>
          {t("general.menu.deleteAccount.contentTitle")}
        </ContentTitle>
        <ContentDescription style={{ whiteSpace: "pre-wrap" }}>
          {t("general.menu.deleteAccount.contentDescription")}
        </ContentDescription>
      </ContentContainer>
    );
  }
}

DeleteAccount.propTypes = {
  t: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  setAppModalHeaderText: PropTypes.func.isRequired,
  setAppModalHeaderLeftButton: PropTypes.func.isRequired,
  setAppModalScene: PropTypes.func.isRequired,
  setAppModalFooterButton: PropTypes.func.isRequired
};

export default withTranslation("settings")(DeleteAccount);
