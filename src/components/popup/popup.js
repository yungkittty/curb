import React, { Component } from "react";
import PropTypes from "prop-types";
import PopupContainer from "./components/popup-container";
import PopupWindow from "./components/popup-window";
import IconType from "../general/icon/type";

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

  showPopup() {
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

  render() {
    return this.showPopup();
  }
}

Popup.defaultProps = {
  leftIcon: "none",
  rightIcon: "times",
  leftFunc: undefined,
  rightFunc: undefined,
  buttonLink: undefined
};

Popup.propTypes = {
  leftIcon: PropTypes.oneOf(IconType),
  rightIcon: PropTypes.oneOf(IconType),
  leftFunc: PropTypes.func,
  rightFunc: PropTypes.func,
  buttonLink: PropTypes.string
};

export default Popup;
