import React, { createElement } from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";

const ModalContent = ({ component, oldComponent, sceneProps, flow }) => {
  const oldProps = {
    ...sceneProps,
    setData: () => {},
    setTitle: () => {},
    setProgress: () => {},
    setLeftIcon: () => {},
    setLeftClick: () => {},
    setRightIcon: () => {},
    setRightCick: () => {},
    setComponent: () => {},
    setButtonTitle: () => {},
    setButtonClick: () => {}
  };

  return (
    <ContentContainer>
      {flow === 1 && oldComponent
        ? createElement(oldComponent, oldProps)
        : null}
      {createElement(component, sceneProps)}
      {flow === -1 && oldComponent
        ? createElement(oldComponent, oldProps)
        : null}
    </ContentContainer>
  );
};

ModalContent.defaultProps = {
  component: undefined,
  oldComponent: undefined,
  sceneProps: undefined,
  flow: undefined
};

ModalContent.propTypes = {
  component: PropTypes.func,
  oldComponent: PropTypes.func,
  /* eslint-disable-next-line */
  sceneProps: PropTypes.object,
  flow: PropTypes.number
};

export default ModalContent;
