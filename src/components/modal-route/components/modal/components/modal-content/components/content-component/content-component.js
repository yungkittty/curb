import React, { createElement } from "react";
import PropTypes from "prop-types";
import ComponentContainer from "./components/component-container";

const ContentComponent = ({ component, props }) => (
  <ComponentContainer>
    {component && createElement(component, props)}
  </ComponentContainer>
);

ContentComponent.defaultProps = {
  component: undefined,
  props: undefined
};

ContentComponent.propTypes = {
  component: PropTypes.func,
  /* eslint-disable-next-line */
  props: PropTypes.object
};

export default ContentComponent;
