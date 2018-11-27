import React, { createElement } from "react";
import PropTypes from "prop-types";
import ContentContainer from "./components/content-container";

const ModalContent = ({
  onChange,
  data,
  setParameter,
  component,
  render,
  others
}) => (
  <ContentContainer>
    {component
      ? createElement(component, { onChange, data, setParameter, ...others })
      : render
        ? render(others)
        : null}
  </ContentContainer>
);

ModalContent.defaultProps = {
  content: undefined
};

ModalContent.propTypes = {
  content: PropTypes.func
};

export default ModalContent;
