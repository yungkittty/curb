import React, { Component } from "react";
import PropTypes from "prop-types";
import PopupContainer from "./components/popup-container";
import PopupWindow from "./components/popup-window";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupShown: true
    };
  }

  closePopup() {
    this.setState({
      isPopupShown: false
    });
  }

  back() {}

  render() {
    const { leftIcon, rightIcon, leftFunc, rightFunc, buttonLink } = this.props;
    if (this.state.isPopupShown)
      return (
        <PopupContainer>
          <PopupWindow
            title="Popup"
            button="Button"
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
  leftIcon: undefined,
  rightIcon: "times",
  leftFunc: undefined,
  rightFunc: undefined,
  buttonLink: undefined
};

Popup.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftFunc: PropTypes.func,
  rightFunc: PropTypes.func,
  buttonLink: PropTypes.string
};

export default Popup;
