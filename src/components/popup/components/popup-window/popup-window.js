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

  render() {
    const {
      title,
      progress,
      leftIcon,
      rightIcon,
      leftTo,
      leftFunc,
      rightTo,
      rightFunc,
      content,
      multiContent,
      button,
      buttonTo,
      buttonFunc
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
        {content ? <WindowContent content={content} /> : null}
        {multiContent ? multiContent : null}
        {button && (
          <WindowButton
            button={button}
            buttonTo={buttonTo}
            buttonFunc={buttonFunc}
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
  rightIcon: "times",
  leftFunc: undefined,
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
  rightIcon: PropTypes.string,
  leftFunc: PropTypes.func,
  rightFunc: PropTypes.func,
  content: PropTypes.func,
  multiContent: PropTypes.object,
  button: PropTypes.string,
  buttonTo: PropTypes.string
};

export default PopupWindow;
