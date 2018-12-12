import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalOverlay from "./components/modal-overlay";
import ModalContainer from "./components/modal-container";
import ModalHeader from "./components/modal-header";
import ModalContent from "./components/modal-content";
import ModalButton from "./components/modal-button";
import ModalBlur from "./components/modal-blur";

class Modal extends Component {
  constructor(props) {
    super(props);

    const { component } = this.props;

    this.state = {
      data: {},
      flow: undefined,
      title: undefined,
      progress: undefined,
      leftIcon: undefined,
      leftClick: undefined,
      rightIcon: "times",
      rightClick: { pathname: "/" },
      component,
      oldComponent: undefined,
      buttonTitle: undefined,
      buttonClick: undefined
    };

    this.setData = this.setData.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.setLeftIcon = this.setLeftIcon.bind(this);
    this.setLeftClick = this.setLeftClick.bind(this);
    this.setRightIcon = this.setRightIcon.bind(this);
    this.setRightCick = this.setRightCick.bind(this);
    this.setComponent = this.setComponent.bind(this);
    this.setButtonTitle = this.setButtonTitle.bind(this);
    this.setButtonClick = this.setButtonClick.bind(this);

    this.initialState = this.state;
  }

  setData(newData) {
    const { data } = this.state;
    this.setState({ data: { ...data, ...newData } });
  }

  setTitle(title) {
    this.setState({ title });
  }

  setProgress(progress) {
    this.setState({ progress });
  }

  setLeftIcon(leftIcon) {
    this.setState({ leftIcon });
  }

  setLeftClick(leftClick) {
    this.setState({ leftClick });
  }

  setRightIcon(rightIcon) {
    this.setState({ rightIcon });
  }

  setRightCick(rightClick) {
    this.setState({ rightClick });
  }

  setComponent(newComponent, flow) {
    const { data, component } = this.state;

    const modalContent = document.getElementById("modal-content");

    modalContent.style.transition = null;
    modalContent.style.transform =
      flow === 1 ? "translateX(0%)" : "translateX(-50%)";

    this.setState({
      ...this.initialState,
      data,
      flow,
      oldComponent: component,
      component: newComponent
    });

    modalContent.style.transition = "all 0.45s ease-in-out";
    modalContent.style.transform =
      flow === 1 ? "translateX(-50%)" : "translateX(0%)";
  }

  setButtonTitle(buttonTitle) {
    this.setState({ buttonTitle });
  }

  setButtonClick(buttonClick) {
    this.setState({ buttonClick });
  }

  render() {
    const {
      setData,
      setTitle,
      setProgress,
      setLeftIcon,
      setLeftClick,
      setRightIcon,
      setRightCick,
      setComponent,
      setButtonTitle,
      setButtonClick
    } = this;

    const { render, ...others } = this.props;

    const {
      data,
      flow,
      title,
      progress,
      leftIcon,
      leftClick,
      rightIcon,
      rightClick,
      component,
      oldComponent,
      buttonTitle,
      buttonClick
    } = this.state;

    const sceneProps = {
      data,
      setData,
      setTitle,
      setProgress,
      setLeftIcon,
      setLeftClick,
      setRightIcon,
      setRightCick,
      setComponent,
      setButtonTitle,
      setButtonClick,
      ...others
    };

    return (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader
            title={title}
            progress={progress}
            leftIcon={leftIcon}
            leftClick={leftClick}
            rightIcon={rightIcon}
            rightClick={rightClick}
          />
          <ModalContent
            component={component}
            oldComponent={oldComponent}
            sceneProps={sceneProps}
            flow={flow}
          />
          {buttonTitle && (
            <ModalButton title={buttonTitle} onClick={buttonClick} />
          )}
        </ModalContainer>
      </ModalOverlay>
    );
  }
}

Modal.defaultProps = {
  component: undefined,
  render: undefined
};

Modal.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func
};

export default ModalBlur(Modal);
