import React from "react";
import { Keyboard, Platform } from "react-native";
import FooterButtonText from "./components/footer-button-text";

class ModalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow",
      () => this.setState({ isShowed: false })
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ isShowed: true })
    );
    this.state = { isShowed: true };
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const { isShowed } = this.state;
    return isShowed ? <FooterButtonText type="h3" {...this.props} /> : null;
  }
}

export default ModalFooter;
