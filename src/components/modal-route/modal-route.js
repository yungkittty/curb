import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Route from "../route";
import Modal from "../modal";

// https://zhirzh.github.io/2017/05/25/react-router-twitter-pinterest-style/

const ModalRoute = ({ component, render, children, ...others }) => (
  <Route
    {...others}
    render={({ location: { state: { isModal = false } = {} } }) => (
      <Fragment>
        {isModal ? null : null}
        <Modal component={component || render} />
      </Fragment>
    )}
  />
);

ModalRoute.defaultProps = { component: undefined, render: undefined };

ModalRoute.propTypes = { component: PropTypes.func, render: PropTypes.func };

export default ModalRoute;
