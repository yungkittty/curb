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
      document.getElementById("app").style.filter = "blur(2px)";
  }

  componentWillUnmount() {
    if (typeof document !== "undefined")
      document.getElementById("app").style.filter = "blur(0px)";
  }

  callCustomButtonFunc() {
    this.refs.windowContent.buttonFunc();
  }

  render() {
    const {
      title,
      progress,
      leftIcon,
      leftTo,
      leftFunc,
      rightIcon,
      rightTo,
      rightFunc,
      content,
      multiContent,
      hasToValidate,
      button,
      buttonTo
    } = this.props;
    return (
      <WindowContainer>
        <WindowHeader
          title={title}
          progress={progress}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          leftTo={leftTo}
          rightTo={rightTo}
          leftFunc={leftFunc}
          rightFunc={rightFunc}
        />
        {content ? (
          <WindowContent
            ref="windowContent"
            customValidate={this.setValidate}
            content={content}
          />
        ) : null}
        {multiContent ? multiContent : null}
        {button && (
          <WindowButton
            button={button}
            buttonTo={!hasToValidate ? buttonTo : null}
            buttonFunc={
              hasToValidate ? this.callCustomButtonFunc.bind(this) : null
            }
          />
        )}
      </WindowContainer>
    );
  }
}

PopupWindow.defaultProps = {
  title: undefined,
  progress: undefined,
  leftIcon: undefined,
  leftTo: undefined,
  leftFunc: undefined,
  rightIcon: "times",
  rightTo: { pathname: "/" },
  rightFunc: undefined,
  content: undefined,
  multiContent: undefined,
  button: undefined,
  buttonTo: undefined
};

PopupWindow.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.object,
  leftIcon: PropTypes.string,
  leftTo: PropTypes.object,
  leftFunc: PropTypes.func,
  rightIcon: PropTypes.string,
  rightTo: PropTypes.object,
  rightFunc: PropTypes.func,
  content: PropTypes.func,
  multiContent: PropTypes.object,
  button: PropTypes.string,
  buttonTo: PropTypes.object
};

export default PopupWindow;
