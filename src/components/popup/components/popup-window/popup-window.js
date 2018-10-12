import React, { Component } from "react";
import PropTypes from "prop-types";
import WindowContainer from "./components/window-container";
import WindowHeader from "./components/window-header";
import WindowContent from "./components/window-content";
import WindowButton from "./components/window-button";

class PopupWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  componentDidMount() {
    if (typeof document !== "undefined")
      document.getElementById("base").style.filter = "blur(2px)";
  }

  componentWillUnmount() {
    if (typeof document !== "undefined")
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
        <WindowContent />
        {button && <WindowButton button={button} buttonLink={buttonLink} />}
      </WindowContainer>
    );
  }
}

PopupWindow.defaultProps = {
  title: undefined,
  progress: undefined,
  leftIcon: undefined,
  rightIcon: undefined,
  leftFunc: undefined,
  rightFunc: undefined,
  button: undefined,
  buttonLink: undefined
};

PopupWindow.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  leftFunc: PropTypes.func,
  rightFunc: PropTypes.func,
  button: PropTypes.string,
  buttonLink: PropTypes.string
};

export default PopupWindow;
