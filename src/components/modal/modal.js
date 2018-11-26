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

  async callCustomFunc() {
    const { buttonFunc } = this.props;
    this.setState({ buttonClicked: true });
    if ((await this.refs.windowContent.customFunc()) && buttonFunc) {
      buttonFunc();
    }
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
      buttonTo
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
          <ModalContent ref="windowContent" content={content} />
        ) : null}
        {multiContent ? multiContent : null}
        {button && (
          <ModalButton
            button={button}
            buttonTo={buttonTo}
            buttonFunc={!buttonClicked ? this.callCustomFunc.bind(this) : null}
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
