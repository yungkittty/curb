import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import LoaderContainer from "./components/loader-container";
import LoaderIcon from "./components/loader-icon";

const Loader = ({ theme }) => (
  <LoaderContainer>
    <LoaderIcon icon="spinner" size="medium" color={theme.secondaryColor} />
  </LoaderContainer>
);

Loader.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object.isRequired
};

export default withTheme(Loader);
