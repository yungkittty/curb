import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import Stadium from "../../../../../../../../components/stadium";
import Button from "../../../../../../../../components/button";
import { platformBools } from "../../../../../../../../configurations/platform";

const ButtonContainer = ({
  // eslint-disable-line
  isCurrentUserIn,
  groupGradientAngle: gradientAngle,
  groupGradientColors: gradientColors,
  style,
  ...others
}) => {
  const stadiumOthers = {
    ...others,
    // eslint-disable-line
    ...(isCurrentUserIn
      ? // eslint-disable-line
        { gradientAngle, gradientColors }
      : { backgroundColor: "white" })
  };
  const stadiumStyleOthers = {
    ...(_.isArray(style) ? _.reduce(style, _.extend, {}) : style),
    // eslint-disable-line
    ...(isCurrentUserIn
      ? // eslint-disable-line
        { borderWidth: 5, borderStyle: "solid", borderColor: "white" }
      : {})
  };
  return (
    <Stadium
      // eslint-disable-line
      {...stadiumOthers}
      as={Button}
      radius="medium"
      style={{
        ...stadiumStyleOthers,
        display: "flex",
        position: "absolute",
        bottom: platformBools.isWeb ? 40 : 20,
        flexDirection: "row",
        alignSelf: "center"
      }}
    />
  );
};

ButtonContainer.defaultProps = {
  style: undefined
};

ButtonContainer.propTypes = {
  isCurrentUserIn: PropTypes.bool.isRequired,
  groupGradientAngle: PropTypes.number.isRequired,
  groupGradientColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default ButtonContainer;
