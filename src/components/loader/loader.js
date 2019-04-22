import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import LoaderContainer from "./components/loader-container";
import LoaderIcon from "./components/loader-icon";

const Loader = ({ theme, size, color }) => (
  <LoaderContainer>
    <LoaderIcon icon="spinner" size={size} color={color || theme.secondaryColor} />
  </LoaderContainer>
);

Loader.defaultProps = {
  size: "medium",
  color: undefined
};

Loader.propTypes = {
  /* eslint-disable-next-line */
  theme: PropTypes.object.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
};

export default withTheme(Loader);
