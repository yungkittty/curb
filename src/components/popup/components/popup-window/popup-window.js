import React from "react";
import PropTypes from "prop-types";
import WindowContainer from "./components/window-container";
import WindowHeader from "./components/window-header";
import WindowContent from "./components/window-content";
import WindowButton from "./components/window-button";
import IconType from "../../../general/icon/type";

const PopupWindow = ({
  title,
  leftIcon,
  rightIcon,
  leftFunc,
  rightFunc,
  button,
  buttonLink
}) => (
  <WindowContainer>
    <WindowHeader
      title={title}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      leftFunc={leftFunc}
      rightFunc={rightFunc}
    />
    <WindowContent size={button ? "2" : "1"} />
    {button && <WindowButton button={button} buttonLink={buttonLink} />}
  </WindowContainer>
);

PopupWindow.defaultProps = {
  button: undefined,
  buttonLink: undefined
};

PopupWindow.propTypes = {
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.oneOf(IconType).isRequired,
  rightIcon: PropTypes.oneOf(IconType).isRequired,
  leftFunc: PropTypes.func.isRequired,
  rightFunc: PropTypes.func.isRequired,
  button: PropTypes.string,
  buttonLink: PropTypes.string
};

export default PopupWindow;
