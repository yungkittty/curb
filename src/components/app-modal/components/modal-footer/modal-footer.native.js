import React from "react";
import PropTypes from "prop-types";
import { Keyboard } from "react-native";
import FooterButtonText from "./components/footer-button-text";
import { platformBools } from "../../../../configurations/platform";

class ModalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.keyboardDidShowListener = Keyboard.addListener(
      platformBools.isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      () => this.setState({ isShowed: false })
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      platformBools.isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ isShowed: true })
    );
    this.state = { isShowed: true };
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const {
      // eslint-disable-line
      isShowed
    } = this.state;
    const {
      // eslint-disable-line
      areAppModalButtonsDisabled,
      appModalFooterText,
      appModalFooterOnClick
    } = this.props;
    return isShowed && appModalFooterText ? (
      <FooterButtonText
        type="h3"
        weight={500}
        // eslint-disable-next-line
        children={appModalFooterText}
        onClick={appModalFooterOnClick}
        disabled={areAppModalButtonsDisabled}
      />
    ) : null;
  }
}

ModalFooter.propTypes = {
  areAppModalButtonsDisabled: PropTypes.bool.isRequired,
  appModalFooterText: PropTypes.string.isRequired,
  appModalFooterOnClick: PropTypes.func.isRequired
};

export default ModalFooter;
