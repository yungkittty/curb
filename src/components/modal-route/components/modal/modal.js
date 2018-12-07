import React, { Component, createElement } from "react";
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
      title: undefined,
      progress: undefined,
      leftIcon: undefined,
      leftClick: undefined,
      rightIcon: "times",
      rightClick: { pathname: "/" },
      component,
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

  setComponent(newComponent) {
    const { component, data } = this.state;
    this.setState({ ...this.initialState, component, data });

    // Make some animation

    this.setState({ component: newComponent });
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
      title,
      progress,
      leftIcon,
      leftClick,
      rightIcon,
      rightClick,
      component,
      buttonTitle,
      buttonClick
    } = this.state;

    const props = {
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
          <ModalContent>
            {/* eslint-disable-next-line */}
            {component
              ? createElement(component, props)
              : render
              ? render(props)
              : null}
          </ModalContent>
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
