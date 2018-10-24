import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Route from "../route";
import Modal from "./components/modal";

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
          <Modal {...props} component={component} render={render} />
        </Fragment>
      );
    }}
  />
);

ModalRoute.defaultProps = { component: undefined, render: undefined };

ModalRoute.propTypes = { component: PropTypes.func, render: PropTypes.func };

export default ModalRoute;
