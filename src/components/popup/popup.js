import React, { Component } from "react";
import PropTypes from "prop-types";
import PopupContainer from "./components/popup-container";
import PopupWindow from "./components/popup-window";

class Popup extends Component {
  constructor(props) {
    super(props);
    const { title, progress, button } = this.props;
    this.state = {
      isPopupShown: true,
      title: title,
      progress: progress,
      button: button
    };
  }

  closePopup() {
    this.setState({
      isPopupShown: false
    });
  }

  back() { }

  render() {
    const { leftIcon, rightIcon, leftFunc, rightFunc, buttonLink } = this.props;

    if (this.state.isPopupShown)
      return (
        <PopupContainer>
          <PopupWindow
            title={this.state.title}
            progress={this.state.progress}
            button={this.state.button}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            leftFunc={leftFunc ? leftFunc : this.back.bind(this)}
            rightFunc={rightFunc ? rightFunc : this.closePopup.bind(this)}
            buttonLink={buttonLink}
          />
        </PopupContainer>
      );
    else return null;
  }
}

Popup.defaultProps = {
  title: "Popup",
  progress: undefined,
  leftIcon: undefined,
  rightIcon: "times",
  leftFunc: undefined,
  rightFunc: undefined,
  button: "Button",
  buttonLink: undefined
};

Popup.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftFunc: PropTypes.func,
  rightFunc: PropTypes.func,
  button: PropTypes.string,
  buttonLink: PropTypes.string
};

export default Popup;
