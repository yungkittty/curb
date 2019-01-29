import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import LoadingContainer from "./components/loading-container";
import LoadingIcon from "./components/loading-icon";

const Loading = ({ theme }) => (
  <Fragment>
    <LoadingIcon icon="spinner" size="medium" color={theme.backgroundColor} />
    <LoadingContainer />
  </Fragment>
);

Loading.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object
};

export default withTheme(Loading);
