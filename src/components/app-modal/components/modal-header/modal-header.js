import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import AppHeader from "../../../app-header";
import HeaderMiddle from "./components/header-middle";

class ModalHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onBackClick = this.onBackClick.bind(this);
    this.renderMiddle = this.renderMiddle.bind(this);
  }

  // eslint-disable-next-line
  getLeftButtons() {
    const {
      // eslint-disable-line
      areAppModalButtonsDisabled,
      appModalHeaderLeftButtons: leftButtons,
      theme
    } = this.props;
    return _.map(
      // eslint-disable-line
      leftButtons,
      leftButton => ({
        // eslint-disable-line
        ...leftButton,
        size: "extra-small",
        color: theme.fontColor,
        disabled: areAppModalButtonsDisabled
      })
    );
  }

  getRightButtons() {
    const {
      // eslint-disable-line
      areAppModalButtonsDisabled,
      appModalHeaderRightButtons: leftButtonsOthers,
      hideAppModal,
      theme
    } = this.props;
    const rightButtonDefault = { icon: "times", onClick: hideAppModal };
    const rightButtons = [...leftButtonsOthers, rightButtonDefault];
    return _.map(
      // eslint-disable-line
      rightButtons,
      rightButton => ({
        // eslint-disable-line
        ...rightButton,
        size: "extra-small",
        color: theme.fontColor,
        disabled: areAppModalButtonsDisabled
      })
    );
  }

  onBackClick() {
    const {
      // eslint-disable-line
      areAppModalButtonsDisabled,
      appModalHeaderBackButton,
      hideAppModal
    } = this.props;
    if (!areAppModalButtonsDisabled) {
      if (appModalHeaderBackButton.onClick) {
        appModalHeaderBackButton.onClick();
      } else {
        hideAppModal();
      }
    }
  }

  renderMiddle() {
    const {
      // eslint-disable-line
      appModalHeaderText,
      appModalHeaderCurrentStep,
      appModalHeaderSteps
    } = this.props;
    return (
      <HeaderMiddle
        // eslint-disable-line
        appModalHeaderText={appModalHeaderText}
        appModalHeaderCurrentStep={appModalHeaderCurrentStep}
        appModalHeaderSteps={appModalHeaderSteps}
      />
    );
  }

  render() {
    return (
      <AppHeader
        // eslint-disable-line
        leftButtons={this.getLeftButtons()}
        rightButtons={this.getRightButtons()}
        onBackClick={this.onBackClick}
        renderMiddle={this.renderMiddle}
      />
    );
  }
}

ModalHeader.propTypes = {
  areAppModalButtonsDisabled: PropTypes.bool.isRequired,
  appModalHeaderText: PropTypes.string.isRequired,
  appModalHeaderCurrentStep: PropTypes.number.isRequired,
  appModalHeaderSteps: PropTypes.number.isRequired,
  appModalHeaderLeftButtons: PropTypes.array.isRequired, // eslint-disable-line
  appModalHeaderRightButtons: PropTypes.array.isRequired, // eslint-disable-line
  appModalHeaderBackButton: PropTypes.object.isRequired, // eslint-disable-line
  hideAppModal: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(ModalHeader);
