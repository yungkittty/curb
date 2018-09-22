import React, { Component } from "react";
import PropTypes from "prop-types";
import WindowContainer from "./components/window-container";
import WindowHeader from "./components/window-header";
import WindowContent from "./components/window-content";
import WindowButton from "./components/window-button";
import IconType from "../../../general/icon/type";

class PopupWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  componentDidMount() {
    document.getElementById("base").style.filter = "blur(2px)";
  }

  componentWillUnmount() {
    document.getElementById("base").style.filter = "blur(0px)";
  }

  back() {
    console.log("back");
  }

  rightFunc() {
    const { rightFunc } = this.props;
    this.setState({
      open: false
    });
    if (rightFunc) rightFunc();
  }

  render() {
    const {
      title,
      progress,
      leftIcon,
      rightIcon,
      leftFunc,
      button,
      buttonLink
    } = this.props;
    return (
      <WindowContainer>
        <WindowHeader
          title={title}
          progress={progress}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftFunc={leftFunc ? leftFunc : this.back.bind(this)}
          rightFunc={this.rightFunc.bind(this)}
        />
        <WindowContent size={button ? "2" : "1"} />
        {button && <WindowButton button={button} buttonLink={buttonLink} />}
      </WindowContainer>
    );
  }
}

PopupWindow.defaultProps = {
  title: undefined,
  progress: undefined,
  leftFunc: undefined,
  rightFunc: undefined,
  button: undefined,
  buttonLink: undefined
};

PopupWindow.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object,
  leftIcon: PropTypes.oneOf(IconType).isRequired,
  rightIcon: PropTypes.oneOf(IconType).isRequired,
  leftFunc: PropTypes.func,
  rightFunc: PropTypes.func,
  button: PropTypes.string,
  buttonLink: PropTypes.string
};

export default PopupWindow;
