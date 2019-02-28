import React, { createElement } from "react";
import PropTypes from "prop-types";
import ComponentContainer from "./components/component-container";

const ContentComponent = ({ component, render, props }) => (
  <ComponentContainer>
    {/* eslint-disable-next-line */}
    {component ? (
      createElement(component, props)
    ) : render ? (
      render(props)
    ) : (
      <React.Fragment />
    )}
  </ComponentContainer>
);

ContentComponent.defaultProps = {
  component: undefined,
  render: undefined,
  props: undefined
};

ContentComponent.propTypes = {
  component: PropTypes.func,
  render: PropTypes.func,
  /* eslint-disable-next-line */
  props: PropTypes.object
};

export default ContentComponent;
