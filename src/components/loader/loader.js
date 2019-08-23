import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import LoaderContainer from "./components/loader-container";
import LoaderCircle from "./components/loader-circle";
import LoaderCircleContainer from "./components/loader-circle-container";

const Loader = ({ size }) => (
  <LoaderContainer>
    <LoaderCircleContainer diameter={size}>
      {(innerDiameter, mounted) =>
        _.times(8, index => (
          <LoaderCircle key={index} index={index} innerDiameter={innerDiameter} mounted={mounted} />
        ))
      }
    </LoaderCircleContainer>
  </LoaderContainer>
);

Loader.defaultProps = {
  size: "small"
};

Loader.propTypes = {
  size: PropTypes.string
};

export default Loader;
