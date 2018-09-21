import React, { Component } from "react";
import PropTypes from "prop-types";
import PopupContainer from "./components/popup-container";
import PopupWindow from "./components/popup-window";
import IconType from "../general/icon/type";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  componentDidMount() {
    document.getElementById("app").style.filter = "blur(2px)";
  }

  componentWillUnmount() {
    document.getElementById("app").style.filter = "blur(0px)";
  }

  closePopup() {
    const { open } = this.state;

    if (open === true) {
      console.log("je vais me fermer!");
    }
  }

  render() {
    const {
      title,
      leftIcon,
      rightIcon,
      leftFunc,
      rightFunc,
      button,
      buttonLink
    } = this.props;
    return (
      <PopupContainer>
        <PopupWindow
          title={title}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftFunc={leftFunc}
          rightFunc={rightFunc}
          button={button}
          buttonLink={buttonLink}
        />
      </PopupContainer>
    );
  }
}

Popup.defaultProps = {
  leftIcon: "arrow-left",
  rightIcon: "times",
  leftFunc: Popup.closePopup,
  rightFunc: () => Popup.closePopup,
  button: undefined,
  buttonLink: undefined
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.oneOf(IconType),
  rightIcon: PropTypes.oneOf(IconType),
  leftFunc: PropTypes.func,
  rightFunc: PropTypes.func,
  button: PropTypes.string,
  buttonLink: PropTypes.string
};

export default Popup;
