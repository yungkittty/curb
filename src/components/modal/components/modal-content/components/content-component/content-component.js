import React, { createElement, Fragment } from "react";
import PropTypes from "prop-types";
import ComponentContainer from "./components/component-container";
import Loader from "../../../../../loader";

const ContentComponent = ({ component, props, modalLoading }) => (
  <ComponentContainer>
    {modalLoading && <Loader />}
    {component ? createElement(component, props) : <Fragment />}
  </ComponentContainer>
);

ContentComponent.defaultProps = {
  component: undefined,
  props: undefined,
  modalLoading: undefined
};

ContentComponent.propTypes = {
  component: PropTypes.func,
  /* eslint-disable-next-line */
  props: PropTypes.object,
  modalLoading: PropTypes.bool
};

export default ContentComponent;
