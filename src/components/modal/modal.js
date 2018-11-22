import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalContent from "./components/modal-content";
import ModalButton from "./components/modal-button";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
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

  async callCustomFunc() {
    this.setState({ buttonClicked: true });
    await this.refs.windowContent.customFunc();
    this.setState({ buttonClicked: false });
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
      button,
      buttonTo,
      customFunc
    } = this.props;
    const { buttonClicked } = this.state;
    return (
      <ModalContainer>
        <ModalHeader
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
          <ModalContent
            ref="windowContent"
            customValidate={this.setValidate}
            content={content}
          />
        ) : null}
        {multiContent ? multiContent : null}
        {button && (
          <ModalButton
            button={button}
            buttonTo={!customFunc ? buttonTo : null}
            buttonFunc={customFunc ? this.callCustomFunc.bind(this) : null}
            buttonClicked={buttonClicked}
          />
        )}
      </ModalContainer>
    );
  }
}

Modal.defaultProps = {
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

Modal.propTypes = {
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

export default Modal;
