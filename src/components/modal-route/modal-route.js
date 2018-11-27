import React, { createElement, Fragment } from "react";
import PropTypes from "prop-types";
import Route from "../route";
import ModalWrapper from "./components/modal/components/modal-wrapper";

// https://zhirzh.github.io/2017/05/25/react-router-twitter-pinterest-style/

const ModalRoute = ({
  component,
  render,
  // eslint-disable-next-line
  children,
  ...others
}) => (
  <Route
    {...others}
    render={props => {
      const {
        // eslint-disable-next-line
        location: { state: { isModal = false } = {} }
      } = props;
      return (
        <Fragment>
          {isModal ? null : null}
          {createElement(ModalWrapper({ ...props, component, render }))}
        </Fragment>
      );
    }}
  />
);

ModalRoute.defaultProps = { component: undefined, render: undefined };

ModalRoute.propTypes = { component: PropTypes.func, render: PropTypes.func };

export default ModalRoute;
