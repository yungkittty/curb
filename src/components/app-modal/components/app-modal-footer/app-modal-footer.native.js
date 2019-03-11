import React from "react";
import { Keyboard } from "react-native";
import FooterButtonText from "./components/footer-button-text";

class AppModalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow",
      () => this.setState({ isButtonShowed: false }));
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide",
      () => this.setState({ isButtonShowed: true }));
    this.state = { isButtonShowed: true };
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const { isButtonShowed } = this.state;
    return isButtonShowed ? <FooterButtonText {...this.props} /> : null;
  }
}

export default AppModalFooter;
