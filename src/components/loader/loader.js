import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import LoaderContainer from "./components/loader-container";
import LoaderCircle from "./components/loader-circle";
import LoaderCircleContainer from "./components/loader-circle-container";

const Loader = ({ size, noFlex }) => (
  <LoaderContainer noFlex={noFlex}>
    <LoaderCircleContainer diameter={size}>
      {innerDiameter =>
        _.times(8, index => <LoaderCircle key={index} index={index} innerDiameter={innerDiameter} />)
      }
    </LoaderCircleContainer>
  </LoaderContainer>
);

Loader.defaultProps = {
  size: "small",
  noFlex: false
};

Loader.propTypes = {
  size: PropTypes.string,
  noFlex: PropTypes.bool
};

export default Loader;
