import React, { Component } from "react";
import PropTypes from "prop-types";
/* eslint-disable-next-line */
import General from "../../";
import ContentContainer from "./components/content-container";
import ContentTitle from "./components/content-title";
import ContentDescription from "./components/content-description";

class DeleteAccount extends Component {
  constructor(props) {
    super(props);
    const {
      setTitle,
      setLeftClick,
      setLeftIcon,
      setComponent,
      setButtonTitle,
      setButtonClick
    } = this.props;

    setTitle("Delete account");
    setLeftIcon("arrow-left");
    setLeftClick(() => setComponent(General, -1));
    setButtonTitle("Delete my account");
    setButtonClick(() => console.log("Delete account call"));
  }

  render() {
    return (
      <ContentContainer>
        <ContentTitle>
          Are you sure you want to delete your account ?
        </ContentTitle>
        <ContentDescription>
          You’ll never be able to recover your account, and all of your data
          content will be deleted forever.
        </ContentDescription>
        <ContentDescription>
          If you ever want to join Curb again, you’ll have to create a new
          account.
        </ContentDescription>
        <ContentDescription>
          If you agree with that, you can confirm this action by clicking the
          button below :
        </ContentDescription>
      </ContentContainer>
    );
  }
}

DeleteAccount.defaultProps = {
  setTitle: undefined,
  setLeftClick: undefined,
  setLeftIcon: undefined,
  setComponent: undefined,
  setButtonTitle: undefined,
  setButtonClick: undefined
};

DeleteAccount.propTypes = {
  setTitle: PropTypes.func,
  setLeftClick: PropTypes.func,
  setLeftIcon: PropTypes.func,
  setComponent: PropTypes.func,
  setButtonTitle: PropTypes.func,
  setButtonClick: PropTypes.func
};

export default DeleteAccount;
